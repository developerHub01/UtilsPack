1. Array Utilities

   removeDuplicates(arr) – Remove duplicates from an array.
   flattenArray(arr) – Flatten a nested array.
   deepCloneArray(arr) – Deep clone an array.
   findByProp(arr, key, value) – Find an item in an array by a property.
   sortArray(arr, comparator) – Sort an array using a custom comparator.
   groupBy(arr, key) – Group an array by a property.
   chunkArray(arr, size) – Split an array into chunks of specified size.
   indexOfArray(arr, value) – Find the index of a value in an array.
   zipArrays(arr1, arr2) – Combine two arrays into a single array of pairs.
   difference(arr1, arr2) – Find the difference between two arrays.
   union(arr1, arr2) – Find the union of two arrays.
   intersect(arr1, arr2) – Find the intersection of two arrays.
   rotateArray(arr, n) – Rotate an array by n positions.
   isArrayEqual(arr1, arr2) – Check if two arrays are equal.
   uniqBy(arr, key) – Return unique values based on a key in an array of objects.

2. String Utilities

   ✅ up_toCapitalCase(str) – Capitalize the first letter of a string.
   ✅ capitalizeWords(str) – Capitalize the first letter of each word.
   ✅ toCamelCase(str) – Convert a string to camelCase format.
   ✅ toPascalCase(str) – Convert a string to PascalCase format.
   toSnakeCase(str) – Convert a string to snake_case format.
   toKebabCase(str) – Convert a string to kebab-case format.
   reverseString(str) – Reverse a string.
   truncateString(str, length) – Truncate a string to a certain length.
   removeWhitespace(str) – Remove whitespace from the string.
   countWords(str) – Count the number of words in a string.
   stringContains(str, substr) – Check if a string contains a substring.
   padString(str, length, char) – Pad a string to a certain length with a specified character.
   escapeHTML(str) – Escape HTML special characters in a string.
   unescapeHTML(str) – Unescape HTML special characters in a string.
   isPalindrome(str) – Check if a string is a palindrome.
   generateRandomString(length) – Generate a random string of a given length.

3. Object Utilities

   deepClone(obj) – Deep clone an object.
   mergeObjects(...objs) – Merge multiple objects into one.
   getNestedProp(obj, path) – Get a nested property from an object.
   setNestedProp(obj, path, value) – Set a nested property in an object.
   pick(obj, keys) – Pick specific properties from an object.
   omit(obj, keys) – Omit specific properties from an object.
   hasProperty(obj, prop) – Check if an object has a property.
   isEmptyObject(obj) – Check if an object is empty.
   keysToLowerCase(obj) – Convert all keys of an object to lowercase.
   mergeDeep(target, source) – Deep merge two objects.
   isObject(obj) – Check if a value is an object.
   cloneWithoutKeys(obj, keys) – Clone an object without certain keys.
   objectToQueryString(obj) – Convert an object to a query string.

4. Math Utilities

   randomNumber(min, max) – Generate a random number between two values.
   roundToDecimal(num, decimals) – Round a number to a specific decimal place.
   isEven(num) – Check if a number is even.
   isOdd(num) – Check if a number is odd.
   factorial(num) – Calculate the factorial of a number.
   gcd(a, b) – Calculate the greatest common divisor of two numbers.
   lcm(a, b) – Calculate the least common multiple of two numbers.
   average(arr) – Calculate the average of an array of numbers.
   sum(arr) – Sum all values in an array.
   max(arr) – Find the maximum number in an array.
   min(arr) – Find the minimum number in an array.
   range(start, end) – Create an array of numbers between start and end.
   clamp(val, min, max) – Clamp a value between a minimum and maximum value.

5. Date and Time Utilities

   formatDate(date, format) – Format a date to a specific format.
   addDays(date, days) – Add a number of days to a date.
   subtractDays(date, days) – Subtract a number of days from a date.
   isToday(date) – Check if a date is today.
   getDayOfWeek(date) – Get the day of the week for a date.
   getWeekOfYear(date) – Get the week number of the year.
   getMonthName(date) – Get the month name for a date.
   getTimeDifference(date1, date2) – Calculate the difference between two dates.
   isLeapYear(year) – Check if a year is a leap year.
   getISOWeek(date) – Get the ISO week number of a date.
   getUnixTimestamp(date) – Get the Unix timestamp of a date.

6. Number Utilities

   formatNumberWithCommas(num) – Format a number with commas (e.g., 1,000,000).
   isPrime(num) – Check if a number is prime.
   isPerfectSquare(num) – Check if a number is a perfect square.
   toCurrency(num) – Format a number to a currency string.
   isInteger(num) – Check if a number is an integer.
   percentOf(num, total) – Calculate percentage of a number.
   bytesToSize(bytes) – Convert bytes to a human-readable file size.

7. Async Utilities

   debounce(func, delay) – Debounce a function call.
   throttle(func, limit) – Throttle a function call.
   delay(ms) – Delay execution by a given number of milliseconds.
   waitFor(ms) – Wait for a specified time in milliseconds.
   promiseAllSettled(promises) – Wait for all promises to settle.
   promiseTimeout(promise, timeout) – Add a timeout to a promise.
   asyncForEach(arr, callback) – Async forEach to handle async operations in an array.

8. DOM Utilities

   getElementById(id) – Get an element by its ID.
   getElementsByClassName(className) – Get elements by class name.
   getElementsByTagName(tagName) – Get elements by tag name.
   createElement(tag) – Create a new HTML element.
   setTextContent(element, text) – Set the text content of an element.
   setHTMLContent(element, html) – Set the inner HTML of an element.
   setCSSProperty(element, property, value) – Set a CSS property on an element.
   addEventListenerToElement(element, event, callback) – Add event listener to an element.
   getScrollPosition() – Get the current scroll position.
   scrollToElement(element) – Scroll to a specific element.
   isElementVisible(element) – Check if an element is in the viewport.

9. Miscellaneous Utilities

   generateUUID() – Generate a unique UUID.
   isArray(value) – Check if a value is an array.
   isEmpty(value) – Check if a value is empty.
   isEqual(a, b) – Check if two values are equal.
   isBoolean(value) – Check if a value is a boolean.
   isFunction(value) – Check if a value is a function.
   isString(value) – Check if a value is a string.
   isNumber(value) – Check if a value is a number.
   isObject(value) – Check if a value is an object.
   isNull(value) – Check if a value is null.
   isUndefined(value) – Check if a value is undefined.
   getQueryParam(url, param) – Get a query parameter from a URL.
   isEmailValid(email) – Check if an email is valid.
   getRandomElement(arr) – Get a random element from an array.

10. Data Transformation Utilities

    transformKeys(obj, callback) – Transform all keys of an object using a callback function.
    flattenDeep(arr) – Deeply flatten a nested array (handling deeply nested arrays).
    objectToArray(obj) – Convert an object to an array of key-value pairs.

11. Data Parsing and Formatting

    parseCSV(str) – Parse a CSV string into an array of objects.
    jsonToCsv(json) – Convert a JSON object into a CSV string.
    stringifyPrettyJSON(obj) – Pretty-print an object as a JSON string with indentation.
    formatPhoneNumber(phone) – Format a phone number in a standard format (e.g., (123) 456-7890).

12. Performance and Optimization

    memoize(fn) – Memoize a function to cache its results for faster subsequent calls.
    batchPromises(promises, batchSize) – Execute promises in batches rather than all at once to reduce load.
    debounceAsync(func, delay) – Debounce an async function (useful for handling rapid API calls).
    runInParallel(funcs) – Run an array of functions in parallel and return the results.

13. File and URL Handling

    base64Encode(file) – Encode a file to Base64 format.
    base64Decode(str) – Decode a Base64 string back into its original content.
    downloadFile(url, filename) – Trigger a file download from a URL and allow a custom filename.
    getFileExtension(filename) – Get the file extension from a file name.
    parseUrl(url) – Parse a URL into its components (protocol, host, path, etc.).

14. Error Handling

    tryCatch(fn) – Wrap a function call in a try-catch to prevent crashes and handle errors.
    isError(obj) – Check if a value is an instance of an error object.
    logErrorToService(error, service) – Send error information to an external logging service (e.g., Sentry, LogRocket).

15. Advanced Array Manipulation

    combineArrays(arr1, arr2, key) – Combine two arrays of objects based on a common key.
    mapKeys(arr, key, value) – Transform an array of objects by replacing a specific key's values.
    removeFalsyValues(arr) – Remove all falsy values (like null, undefined, false, etc.) from an array.
    rotateArray(arr, direction, n) – Rotate an array left or right by n steps.
    flattenObject(obj) – Flatten an object to a single level with concatenated keys.

16. Local Storage and Session Utilities

    getLocalStorageItem(key) – Get an item from localStorage with error handling.
    setLocalStorageItem(key, value) – Set an item in localStorage with automatic type conversion.
    clearLocalStorage() – Clear all items in localStorage.
    getSessionStorageItem(key) – Get an item from sessionStorage.
    removeStorageItem(key) – Remove an item from localStorage or sessionStorage.

17. Validation Functions

    isHexColor(str) – Check if a string is a valid hex color code.
    isCreditCardValid(cardNumber) – Check if a credit card number is valid using the Luhn algorithm.
    isUrlValid(str) – Check if a URL is valid.
    isDateValid(date) – Check if a given string or object is a valid date.

18. DOM Manipulation

    getParentNode(element) – Get the parent node of a DOM element.
    getChildren(element) – Get all child nodes of a DOM element.
    addClassToElement(element, className) – Add a class to an element.
    removeClassFromElement(element, className) – Remove a class from an element.
    toggleClass(element, className) – Toggle a class on an element.

19. Encryption and Hashing

    sha256Hash(str) – Hash a string with the SHA-256 algorithm.
    md5Hash(str) – Hash a string with the MD5 algorithm.
    aesEncrypt(str, key) – Encrypt a string using AES encryption.
    aesDecrypt(encryptedStr, key) – Decrypt a string using AES decryption.

20. Time Utilities

    isWeekend(date) – Check if a date falls on the weekend.
    getNextMonth(date) – Get the next month from a given date.
    getPreviousMonth(date) – Get the previous month from a given date.
    dateToTimestamp(date) – Convert a date object to a timestamp.

21. User Agent Utilities

    getBrowserInfo() – Get information about the user's browser (name, version, etc.).
    getDeviceType() – Detect whether the user is on a mobile, tablet, or desktop.
    isMobileDevice() – Check if the current device is mobile.
    isTabletDevice() – Check if the current device is a tablet.
    isDesktopDevice() – Check if the current device is desktop.

22. Networking and API

    fetchWithRetry(url, retries, delay) – Fetch data with automatic retries on failure.
    getRequest(url, params) – Send a GET request to a URL with parameters.
    postRequest(url, data) – Send a POST request to a URL with JSON data.
    downloadJson(url) – Download JSON data from a URL.
    checkInternetConnection() – Check if the user is online or offline.

23. Miscellaneous

    uuidV4() – Generate a universally unique identifier (UUID).
    generateSlug(str) – Generate a URL-friendly slug from a string.
    getRandomElement(arr) – Get a random element from an array.
    debounceImmediate(func, delay) – Debounce a function but execute it immediately on the first call.
    cloneDeep(obj) – Deep clone an object (no references).
