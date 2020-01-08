Notation:

<em>x<sup>(i)</sup></em>: input variables/features

<em>y<sup>(i)</sup></em>: output/target variables

<em>(x<sup>(i)</sup>, y<sup>(i)</sup>)</em>: training example (pair)

**training set** - a list of training examples

**superscripted <em>(i)</em>** - an index into the training set (not an exponentiation)

Given a training set, we want to learn a function h<sub>&theta;</sub>(x) so that it is a good predictor for each value of x's corresponding y. This function is called a **hypothesis function**.

*e.g.,* given a set of square feet and costs of houses, you could create a scatter plot of data

**supervised learning** - given the "right answer" for each example in the training set for the data

**regression problem** - given square feet of a living area, we want to predict a real-valued output (the price)

**classification problem** - given square feet of a living area, we want to predict a discrete value (if it's a house or apartment)

**x**: input, square feet of a living area

**y**: output, estimated price

**h<sub>&theta;</sub>(x)**: hypothesis function that maps from x to y

Take the training set and put it through the learning algorithm.

We represent our hypothesis function with:
h<sub>&theta;</sub>(x) = &theta;<sub>0</sub> + &theta;<sub>1</sub>x

This is univariate (x) linear regression.

&theta;<sub>0</sub> and &theta;<sub>1</sub> are the parameters of the model.

We compute these parameters using the __cost function__.
