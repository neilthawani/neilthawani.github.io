In unsupervised learning, we are given unstructured data and have no idea what our results should look like.

We can derive the structure of our input data by clustering it based on relationships among the variables in the data. We may have no idea what the effects of these variables are.

With unsupervised learning there is no feedback based on the prediction results.

*e.g.,* Clustering

Given 1,000,000 different genes, find a way to automatically group these genes into groups related by different variables such as:
1. lifespan,
2. location, 
3. roles, etc.

*e.g.,* Non-clustering/"The Cocktail Party" algorithm

find structure in a chaotic environment, like separating voices and music from noise at a [cocktail party](https://en.wikipedia.org/wiki/Cocktail_party_effect).

In Octave:

`[W,s,v] = svd((repmat(sum(x.*x, 1), size(x,1), 1).*x)*x');`

`svd` is an in-language linear algebra routine.