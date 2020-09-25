# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: 
    An instance variable is created within a class and will be created for each object you make of that class. It only has local scope tied to its particular class, unlike normal variables who's scope depends on where you put them.

  Researched answer:
    An instance variable always starts with an '@'. They are private by default, and they need no declaration. They can be used by multiple class methods. Instance variables can be populated with local variables from the arguments list.  


2. What is a block in Ruby?

  Your answer: 
    A block is a section of code used as a conditional? Not 100% sure. Researching!

  Researched answer:
    A block in Ruby is a section of code, either contained in {} or bookended by a `do` and an `end`. It directly follows a method call and is used as the method argument? Still still super solid on blocks. 


3. Ruby has an implicit return. What does that mean?

  Your answer: 
    It means we don't need to write out a return if we're returning a single line of code. Ruby assumes that single line is what you want to return.

  Researched answer:
    Every block in Ruby returns the value of the last line automatically. 


4. What is object-oriented programming? How is it different than functional programming?

  Your answer: 
    Object-oriented programming focuses on breaking everthing in terms of objects insead of functions. Everything is an object that holds its own variables and methods.  

  Researched answer:
    This approach is well suited for large, complex programs that are updated often. It aslo helps you naturally group data.


5. What is the difference between a class and an object?

  Your answer: 
    A class is a blueprint for an object. A basic structure of variables and methods that can then be used to create objects.

  Researched answer:
    Objects are user-defined using the class keyword.


6. STRETCH: What is `attr_accessor`?

  Your answer: 
    The `attr_accessor` is a shortcut that allows you to create instance variables without getters and setters. The attr_accessor assumes you want a getter and setter of the same name as every variable you put in.

  Researched answer:
    Also availible are `attr_reader` which creates just a getter, and `attr_writer` which created just a setter.



## Looking Ahead: Terms for Next Week
- PostgreSQL: a free and open source relational database management system. 
- API: Application Programming Interface: allows your program to talk to and use other programs.
- CRUD: Create, Read, Update, and Destroy. The four basic functions of persistant storage.
- Ruby on Rails: A server-side web application framework. Gives a model-view-controller framework.
- ORM: Object-relational Mapping. Allows you to interact with your data-base using an OOP language instead of SQL.
- Active Record: The M in model-view-controller. An implementation of the active record pattern which is an ORM system.
