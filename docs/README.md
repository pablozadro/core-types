# Core-Types / Overview

Core-Types is a utility to check the type of an object.

The motivations is to simplify the process of checking the type of an `Object` or `Primitive`, with greater specificity than the `typeof` operator.

One common case is when you want to know if a variable is an `Array`, and the `typeof` operator returns `object`.

The __currying__ technique is used, allowing to easily get a partial result with the value of the passed argument.
