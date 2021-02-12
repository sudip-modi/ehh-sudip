flow = {
    signup: {
        actionSteps: [
            {
                actionStepIndex: 1,
                method: checkUserExists,
                state: states["shunya"],
            },
            {
                actionStepIndex: 2,
                method: alertAboutSignUp,
                state: states["0."],
                condition: {
                    completedActionSteps: [1]
                },
                fromPrevious: {
                    exist: 1
                }
            }
        ]
    }
}


Example of an action flow
{
    actionSteps: [
        {
            actionStepIndex: 11				
		actionStepName: Something1				
		description: About action step: 11				
		method: MethodName				
		arguments: { data1: value1, data2: value2 }
        },
        {
        actionStepIndex: 12				
		actionStepName: Something2				
		description: About action step: 12				
		method: MethodName				
		arguments: { data1: value1, data2: value2 }				
		fromPrevious: { data3: 11 }				
		condition: {
                completedActionSteps: [11]				
		compare: [
                    {
                        value: 11	
					equal: true
                    }	
					{
                        value: 11	
					type: boolean	
						
			]
            }				
	]
}

