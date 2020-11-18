import Stack from 'comp-sci-maths-lib/dist/dataStructures/stack/Stack';

test(`Stack`, () => {
    const myStack: Stack<number> = new Stack<number> ();
    myStack.push (3)
    myStack.push (5)
    myStack.push (1)

    const pop1 = myStack.pop();

    expect(pop1).toBe(1);
})
