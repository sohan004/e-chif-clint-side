import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const Pdf = () => {
    const styles = StyleSheet.create({
        con: {padding: '30px' , position: 'relative'},
        qn: { fontSize: '30px', fontWeight: '500', display: 'block' },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },
        section: { color: 'white', textAlign: 'center', margin: 30 }
    });
    return (
        <Document>
            <Page style={styles.con}>
                <Text style={styles.qn}>1. differences between uncontrolled and controlled components.</Text>
                <Text>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</Text>
                <Text style={styles.qn}>2. How to validate React props using PropTypes</Text>
                <Text>any : The prop can be of any data type.
                    bool : The prop should be a Boolean.
                    number : The prop should be a number.
                    string : The prop should be a string.
                    func : The prop should be a function.
                    array : The prop should be an array.
                    object : The prop should be an object.</Text>
                <Text style={styles.qn}>3. difference between nodejs and express js.</Text>
                <Text>Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that provides additional functionality for building web applications, such as routing, middleware, and template rendering.

                    In other words, Node.js is the platform that allows you to write server-side JavaScript code, while Express.js is a tool that makes it easier to build web applications using Node.js.

                    While Node.js provides basic functionality for building servers, it does not provide specific features for building web applications. Express.js builds on top of Node.js to provide a set of tools and features that make it easier to build web applications, such as handling HTTP requests and responses, defining routes, and adding middleware for handling different aspects of a request.

                    Overall, Node.js provides the foundation for building server-side applications in JavaScript, while Express.js provides a higher-level framework for building web applications on top of Node.js.</Text>
                <Text style={styles.qn}>4. What is a custom hook, and why will you create a custom hook?</Text>
                <Text>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</Text>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    );
};

export default Pdf;