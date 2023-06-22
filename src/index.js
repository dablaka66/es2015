import React from 'react';
import fruits from './foods';
import { createRoot } from 'react-dom/client';
import helpers, { choice ,remove } from './helper';

const fruit = choice (fruits)
let remain = remove(fruit, fruits);
const Index = (remain) => {
    <div>
        <h2>I like want {fruit} , please</h2>
        <h2>here you go: {fruit}</h2>
        <h2>Delicious ! May I have another ?</h2>
        <h2>I'm sorry , we are all out. we have  {remain.length}  left </h2>
        <h2></h2>
        
    </div>
}

/* ReactDOM.render(<Index />, document.getElementById('root'));
 */
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Index tab="home" />);

export default Index;