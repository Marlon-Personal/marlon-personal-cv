import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <p>JavaScript is a popular programming language that is used for creating dynamic and interactive websites. One of the key features of JavaScript is its flexible and dynamic data typing system. In JavaScript, there are two categories of data types: primitive and non-primitive data types.</p>

            <h3>Primitive Data Types</h3>

            <p>Primitive data types in JavaScript are the most basic data types. They are immutable, meaning that their value cannot be changed once they are created. There are six primitive data types in JavaScript:</p>

            <ul>
                <li><br>Number: </br>The number data type represents both integer and floating-point numbers. For example, 10 and 3.14 are both numbers.</li>

                <li><br>String:</br> The string data type represents text. A string is a sequence of characters enclosed in quotes, either single or double. For example, &quot;Hello World&quot; and 'JavaScript' are both strings.</li>

                <li><br>Boolean:</br> The boolean data type represents a logical value, either true or false.</li>

                <li><br>Null:</br> The null data type represents a deliberate non-value or empty value.</li>

                <li><br>Undefined:</br> The undefined data type represents a value that is not yet defined or has no value.</li>

                <li><br>Symbol:</br> The symbol data type represents a unique identifier. Symbols are often used to define object properties to avoid naming collisions.</li>
            </ul>

            <h3>Non-Primitive Data Types</h3>

            <p>Non-primitive data types in JavaScript are complex data types. They are mutable, meaning that their value can be changed after they are created. There are three non-primitive data types in JavaScript:</p>

            <li><br>Object:</br> The object data type represents a collection of properties and values. Objects can be created using object literals or constructors. Examples of objects in JavaScript include arrays, functions, and regular expressions.</li>

            <li><br>Array:</br> The array data type is a special type of object that represents a list of values. Arrays can contain any data type, including other arrays and objects.</li>

            <li><br>Function:</br> The function data type represents a set of instructions that perform a specific task. Functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions.</li>

            <h3>Conclusion</h3>

            <p>In summary, JavaScript has six primitive data types and three non-primitive data types. Primitive data types are immutable and include number, string, boolean, null, undefined, and symbol. Non-primitive data types are mutable and include object, array, and function. Understanding the different data types in JavaScript is essential for writing efficient and effective code.</p>
        </>
    );
}

export default NavBar;