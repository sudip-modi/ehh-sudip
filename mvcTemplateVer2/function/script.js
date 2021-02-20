/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Model {
  constructor() {
    this.entityList = JSON.parse(localStorage.getItem('entityList')) || []
  }

  bindentityListChanged(callback) {
    this.onentityListChanged = callback
  }

  _commit(entityList) {
    this.onentityListChanged(entityList)
    localStorage.setItem('entityList', JSON.stringify(entityList))
  }

  addentity(entityText) {
    const entity = {
      id: this.entityList.length > 0 ? this.entityList[this.entityList.length - 1].id + 1 : 1,
      text: entityText,
      complete: false,
    }

    this.entityList.push(entity)

    this._commit(this.entityList)
  }

  editentity(id, updatedText) {
    this.entityList = this.entityList.map(entity =>
      entity.id === id ? { id: entity.id, text: updatedText, complete: entity.complete } : entity
    )

    this._commit(this.entityList)
  }

  deleteentity(id) {
    this.entityList = this.entityList.filter(entity => entity.id !== id)

    this._commit(this.entityList)
  }

  toggleentity(id) {
    this.entityList = this.entityList.map(entity =>
      entity.id === id ? { id: entity.id, text: entity.text, complete: !entity.complete } : entity
    )

    this._commit(this.entityList)
  }
}

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
  constructor() {
    this.app = this.getElement('#root')
    this.form = this.createElement('form')
    this.input = this.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Add entity'
    this.input.name = 'entity'
    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'
    this.form.append(this.input, this.submitButton)
    this.title = this.createElement('h1')
    this.title.textContent = 'entityList'
    this.entityList = this.createElement('ul', 'entity-list')
    this.app.append(this.title, this.form, this.entityList)

    this._temporaryentityText = ''
    this._initLocalListeners()
  }

  get _entityText() {
    return this.input.value
  }

  _resetInput() {
    this.input.value = ''
  }

  createElement(tag, className) {
    const element = document.createElement(tag)

    if (className) element.classList.add(className)

    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }

  displayentityList(entityList) {
    // Delete all nodes
    while (this.entityList.firstChild) {
      this.entityList.removeChild(this.entityList.firstChild)
    }

    // Show default message
    if (entityList.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Nothing to do! Add a task?'
      this.entityList.append(p)
    } else {
      // Create nodes
      entityList.forEach(entity => {
        const li = this.createElement('li')
        li.id = entity.id

        const checkbox = this.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = entity.complete

        const span = this.createElement('span')
        span.contentEditable = true
        span.classList.add('editable')

        if (entity.complete) {
          const strike = this.createElement('s')
          strike.textContent = entity.text
          span.append(strike)
        } else {
          span.textContent = entity.text
        }

        const deleteButton = this.createElement('button', 'delete')
        deleteButton.textContent = 'Delete'
        li.append(checkbox, span, deleteButton)

        // Append nodes
        this.entityList.append(li)
      })
    }

    // Debugging
    console.log(entityList)
  }

  _initLocalListeners() {
    this.entityList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._temporaryentityText = event.target.innerText
      }
    })
  }

  bindAddentity(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault()

      if (this._entityText) {
        handler(this._entityText)
        this._resetInput()
      }
    })
  }

  bindDeleteentity(handler) {
    this.entityList.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        const id = parseInt(event.target.parentElement.id)

        handler(id)
      }
    })
  }

  bindEditentity(handler) {
    this.entityList.addEventListener('focusout', event => {
      if (this._temporaryentityText) {
        const id = parseInt(event.target.parentElement.id)

        handler(id, this._temporaryentityText)
        this._temporaryentityText = ''
      }
    })
  }

  bindToggleentity(handler) {
    this.entityList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        const id = parseInt(event.target.parentElement.id)

        handler(id)
      }
    })
  }
}

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    // Explicit this binding
    this.model.bindentityListChanged(this.onentityListChanged)
    this.view.bindAddentity(this.handleAddentity)
    this.view.bindEditentity(this.handleEditentity)
    this.view.bindDeleteentity(this.handleDeleteentity)
    this.view.bindToggleentity(this.handleToggleentity)

    // Display initial entityList
    this.onentityListChanged(this.model.entityList)
  }

  onentityListChanged = entityList => {
    this.view.displayentityList(entityList)
  }

  handleAddentity = entityText => {
    this.model.addentity(entityText)
  }

  handleEditentity = (id, entityText) => {
    this.model.editentity(id, entityText)
  }

  handleDeleteentity = id => {
    this.model.deleteentity(id)
  }

  handleToggleentity = id => {
    this.model.toggleentity(id)
  }
}

const app = new Controller(new Model(), new View())
