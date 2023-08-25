# Broken App Issues
    1. Code is using async/await with map, but is not awaiting the results array.
    2. In the catch block, it is using next(err) without defining the err parameter in the function's parameter list. 