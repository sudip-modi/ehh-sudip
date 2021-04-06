function getRequestArgs(args, state) {
    var requestArgs = [];
    for (var p = 0; p < args.length; p++) {
        var reqArg = args[p];
        if (state[reqArg]) {
            requestArgs[p] = state[reqArg];
        } else if (window[reqArg[p]] && !state[reqArg[p]]) {
            requestArgs[p] = this.processReq(window[reqArg[p]]);
        } else {
            requestArgs[p] = reqArg;
        }
    }
    return requestArgs;
}