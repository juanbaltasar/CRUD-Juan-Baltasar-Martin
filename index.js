const crud = function () {

    let items = [
        {id: 1, name: "John", lastname: "Doe"},
        {id: 2, name: "Jane", lastname: "Doe"},
    ]

    let autoincrement = 3

    return {
        create: (name, lastname) => {
            /*YOUR CODE HERE */
            const newItem = { id: autoincrement, name, lastname };
            items.push(newItem)
            autoincrement++;
            return newItem
        },
        read: (id) => {
            /*YOUR CODE HERE */
            let searchedElement = null;

            let i = 0;

            while (searchedElement == null && i < items.length) {
                if (items[i].id == id) {
                    searchedElement = items[i]
                }
                i++
            }

            return searchedElement
        },
        update: (id, name, lastname) => {
            /*YOUR CODE HERE */
            //Se podria utilizar el metodo read para realizar el update, pero por cuestiones de modularizacion no lo utilizare
            
            let updatedElement = null;

            let i = 0;

            while (updatedElement == null && i < items.length) {
                if (items[i].id == id) {
                    updatedElement = { id, name, lastname }
                    items[i] = updatedElement
                }
                i++
            }

            if (updatedElement == null) {
                return false;
            } else {
                return updatedElement
            }
        },
        delete: (id) => {
            /*YOUR CODE HERE */
            let elementDeleted = false

            let i = 0;

            while (!elementDeleted && i < items.length) {
                if (items[i].id == id) {
                    items.splice(i, 1)
                    elementDeleted = true
                }
                i++
            }

            return elementDeleted
        }
    }

}

module.exports = crud()
