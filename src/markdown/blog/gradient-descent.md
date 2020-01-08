**gradient descent** - an algorithm for minimizing the cost function J(&theta;<sub>0</sub>&theta;<sub>1</sub>) and estimating the parameters of the hypothesis function h<sub>&theta;</sub>(x) = &theta;<sub>0</sub> + &theta;<sub>1</sub>x

![gradient descent graph](http://i.imgur.com/HAjeQJ6.png)

We graph the cost function based on its fields, that is: the parameter range of our hypothesis function and the cost resulting by choosing a set of parameters.
To minimize the cost function, we take the derivative of the cost function starting where the red circles are in the graph above. The red arrows in the graph show the potential minima.
This derivative value will give us a direction to move towards on our graph. We step down the cost function in the direction with the steepest descent. The size of each step is determined by &alpha;, the learning rate.

&alpha;: the learning rate, or how big of a step we take when we update &theta;<sub>j</sub>

If alpha is too small, gradient descent might approach the minimum too slowly.

If alpha is too large, gradient descent might overshoot the minimum, fail to converge, or diverge.

If we're at a local minimum, then the derivative is 0 (slope is 0), and our value doesn't update.

The gradient descent algorithm is:

Repeat until convergence:
![gradient descent algorithm](http://i.imgur.com/t2LGVS5.png)

where j = [0, 1], the index numbers.

At each iteration, the parameters &theta;<sub>0</sub> and &theta;<sub>1</sub> should be simultaneously updated. Updating either parameter before calculating another one on the <em>j<sup>(th)</sup></em> iteration would lead to incorrect values.

![correct way to iterate gradient descent algorithm](http://i.imgur.com/oWnQuC1.png)