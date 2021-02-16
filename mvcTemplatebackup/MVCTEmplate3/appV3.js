//https://drstearns.github.io/tutorials/mvc/
/**
 * Base class for all models
 */
class Model {
    constructor() {
        //array of change event listeners
        this._listeners = [];
    }

    /**
     * Adds a listener function that will be called when the model changes
     * @param {function} listener 
     * @returns {Model}
     */
    addChangeListener(listener) {
        //push the new listener function into the array
        this._listeners.push(listener);
        return this;
    }

    /**
     * Removes a change listener function
     * @param {function} listener 
     * @returns {Model}
     */
    removeChangeListener(listener) {
        //filter out the listener to remove
        this._listeners = this._listeners.filter(l => l !== listener);
        return this;
    }

    /**
     * Raises an change event
     * @returns {Model}
     */
    raiseChange() {
        //call the listener functions
        this._listeners.forEach(listener => listener());
        return this;
    }

    /**
     * Bubbles change events from another model up through this one
     * @param {Model} model 
     * @returns {Model}
     */
    bubbleChange(model) {
        model.addChangeListener(() => this.raiseChange());
        return this;
    }
}

/**
 * Represents a map of bare properties for a task
 * @typedef TaskProps
 * @property {string} title
 * @property {boolean} [done]
 */

/**
 * Represents a single task
 */
class Task extends Model {
    /**
     * Constructs a new task with an optional
     * set of initial properties
     * @param {TaskProps} [props]
     */
    constructor(props) {
        super();
        if (props) {
            this._title = props.title;
            this._done = props.done;
        }
    }

    /**
     * Returns the task's title
     * @returns {string}
     */
    get title() {
        return this._title;
    }

    /**
     * Sets the task's title
     * @param {string} title 
     */
    set title(title) {
        if (!title || title.length === 0) {
            throw new Error("title must be non-blank");
        }
        this._title = title;
        this.raiseChange();
    }

    /**
     * Returns the task's done state
     * @returns {boolean}
     */
    get done() {
        return this._done;
    }

    /**
     * Sets the task's done state
     * @param {boolean} done 
     */
    set done(done) {
        this._done = done;
        this.raiseChange();
    }

    /**
     * Toggles the task's done state
     * @returns {Task}
     */
    toggleDone() {
        this._done = !this._done;
        this.raiseChange();
        return this;
    }

    /**
     * Converts this model into a simple object for
     * JSON serialization
     * @returns {TaskProps}
     */
    toJSON() {
        return {
            title: this._title,
            done: this._done
        };
    }
}


/**
 * Represents a list of tasks
 */
class TaskList extends Model {
    /**
     * Constructs a new task list with
     * an optional array of task props
     * @param {TaskProps[]} [taskPropsArray]
     */
    constructor(taskPropsArray) {
        super();
        //if a taskPropsArray was provided...
        if (taskPropsArray) {
            //map it into an array of Task objects
            this._tasks = taskPropsArray.map(tp => new Task(tp));
            //bubble-up change events raised by the Task objects
            this._tasks.forEach(task => this.bubbleChange(task));
        } else {
            //initialize to an empty array
            this._tasks = [];
        }
    }

    /**
     * Returns the total number of tasks
     * @returns {number}
     */
    get length() {
        return this._tasks.length;
    }

    /**
     * Returns the count of tasks that are done
     * @returns {number}
     */
    get doneLength() {
        return this._tasks.reduce((count, task) => task.done ? count + 1 : count, 0);
    }

    /**
     * Returns a new array containing all Task objects
     * that one can iterate over without disturbing the
     * master array maintained by this object
     * @returns {Task[]}
     */
    all() {
        return this._tasks.slice(0);
    }

    /**
     * Adds a new task to the list
     * @param {Task} task 
     */
    add(task) {
        //push the new task into the array
        this._tasks.push(task);
        this.bubbleChange(task);
        this.raiseChange();
    }

    /**
     * Purges all done tasks from the list
     */
    purgeDone() {
        //filter the array of tasks to include only those
        //that are not yet done
        this._tasks = this._tasks.filter(t => !t.done);
        this.raiseChange();
    }

    /**
     * Converts this model into a simple object for
     * JSON serialization
     * @returns {Task[]}
     */
    toJSON() {
        return this._tasks;
    }
}

class View {
    /**
     * Returns an HTML element that contains the rendered view
     * @returns {HTMLElement}
     */
    render() { return undefined; }
}

/**
 * Renders a TaskList as a simple unordered list
 */
class TaskListView extends View {
    /**
     * Constructs the view
     * @param {TaskList} taskList 
     */
    constructor(taskList) {
        super();
        this._taskList = taskList;
    }

    render() {
        //create a <ul> for the list
        let ul = document.createElement("ul");

        //for each Task in the list...
        this._taskList.all().forEach(task => {
            //create an <li> and append it to the <ul>
            let li = ul.appendChild(document.createElement("li"));
            //set the textContent to the task title
            li.textContent = task.title;
            //add a "clickable" style class which we will
            //define in our CSS
            li.classList.add("clickable");
            //if the task is marked as done, add a "done"
            //style class, which we will define in our CSS
            if (task.done) {
                li.classList.add("done");
            }
            //add a click event listener that calls toggleDone()
            li.addEventListener("click", () => task.toggleDone());
        });

        //return the <ul> element
        return ul;
    }
}