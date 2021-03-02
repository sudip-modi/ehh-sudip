function obj_to_array(arg) {
    return Object.entries(arg).map(([key, value]) => `${key}: ${value}`);
}