When applied specifically to the case of linear regression, we can derive a new form of the gradient descent equation by substituting our actual cost and hypothesis functions, modifying the equation to:

![gradient descent for linear regression algorithm](http://i.imgur.com/T4NrouY.png)

**m**: the size of the training set

**&theta;<sub>0</sub>, &theta;<sub>1</sub>**: constants that change simultaneously
x<sub>i</sub>, y<sub>i</sub>: values of the given training set (i.e., the data)

Note that the value for converging upon &theta;<sub>1</sub> is because of the value of the derivative of the cost function J with respect to &theta;<sub>1</sub>:

![derivative of cost function J with respect to theta1](http://i.imgur.com/N62W6ls.png)

Starting with a guess for our hypothesis and repeating these equations yields more and more accurate results for our parameters.

__batch gradient descent__ - gradient descent on the original cost function J which looks at every example in the entire training set on every step

Assuming the learning rate &alpha; is not too large, batch gradient descent always converges to the global minimum. This is because it always yields a convex, bowl-shaped graph with only one global optimum.

In the 3D plane:

![bowl-shaped batch gradient descent graph](http://i.imgur.com/FAqV6pn.png)

In the 2D plane:

![2D batch gradient descent graph](http://i.imgur.com/5L9oECU.png)