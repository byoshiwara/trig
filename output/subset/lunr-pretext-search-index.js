var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " We have tried to make this edition of Trigonometry useful to students in a variety of programs. For example, students who have encountered elements of triangle trig in previous courses may be able to skip all or part of Chapters 1 through 3. Students preparing for technical courses may not need much of the material after Chapter 6 or 7. Chapters 9 and 10 cover vectors and polar coordinates, optional topics that occur in some trigonometry courses but are often reserved for precalculus.  There are many reasons why students might find trigonometry difficult, among them:  The subject inherently involves a great deal of technical detail, which can be allowed to obscure the main ideas.  The subject is often taught with the analytical rigor appropriate to a precalculus course -- before students have acquired the necessary facility with functions.  In his beautiful book, Trigonometric Delights , Eli Maor enjoins us \"Let's not forget that trigonometry is, first and foremost, a practical discipline, born out of and deeply rooted in applications.\" After the New Math \"[f]ormal definitions and legalistic verbosity—all in the name of mathematical rigor—replaced a real understanding of the subject.\" And formalism is \"... certainly not the best way to motivate the beginning student.\"  The typical trigonometry student has just completed a second course in algebra. He or she has a nodding acquaintance with functions and is still very wary of irrational numbers. A statement such as \" \" may well be greeted with panic and bewilderment. So we do not begin with a preliminary chapter covering all the mathematical topics needed for the rest of the course, including elements of analytic geometry and properties of functions such as domain and range, symmetry, transformations, composition, and inverse functions. (This material usually comprises most of a precalculus course, which is usually taught after trigonometry, where it is introduced using more familiar, hence easier, functions as examples.)  Nor do we begin with a chapter about angles, including coterminal and reference angles, converting degrees to minutes and seconds, radians, arc length, and angular velocity, before the trig ratios are even mentioned. We have tried to address these issues as follows:  Chapter 1 reviews only the most basic facts about triangles and circles that students will need to begin their study of trigonometry, and may be omitted or assigned as homework. Other facts about functions and angles are introduced when they are needed. For example, minutes and seconds are discussed in the context of parallax in the section on Law of Sines in Chapter 3. Nautical bearings occur in Section 4.1, Angles and Rotation.  Chapter 2 introduces the three (not six) basic trig ratios, and considers angles in the first quadrant only. We believe this initial simplicity allows students to focus on the fundamental concepts without simultaneously trying to master a welter of peripheral detail.  In Chapter 3 we introduce reference angles for the second quadrant in order to study obtuse triangles and the Laws of Sines and Cosines. Reference angles are covered again in more generality in Chapter 4.  Chapter 4 considers angles as rotations in preparation for the graphs of sine and cosine. Note that the applications of periodic functions in this chapter are functions of degrees only, to fit with our approach: radians come later, after students have some experience with sinusoidal graphs.  Chapter 5 begins with a section on algebraic manipulations with trig ratios, a skill that is often neglected but can engender endless confusion for students. This chapter treats only simple equations and identities; more equations and identities appear in Chapters 7 and 8. We solve equations both graphically and analytically, and we use graphs as well as algebra to verify trigonometric identities.  Chapter 6 introduces radians and the circular functions of real numbers. Most of this chapter and Chapter 7 revisit basic skills such as analyzing graphs and solving equations, but working now in radians rather than degrees.  Chapter 8 studies identities and their use in more detail, including the sum and difference formulas and the double angle identities. Inverse trig functions are included here, and are the three reciprocal trig functions.  Chapters 9 and 10 cover ancillary topics; typical trigonometry courses may include one or more of these topics: vectors, polar coordinates, and complex numbers.  In addition to the Homework Problems, each Example in the book is followed by a similar Exercise for students to test their understanding. Each Section concludes with a Summary , a set of Study Questions, and a list of Skills to be addressed in the Homework. A Summary and a set of Review Problems follows each chapter. Chapters 1 through 8 include Activities for students to work through some of the main ideas. We have described the use of a graphing calculator, but other graphing utilities can easily be substituted.  Throughout we have been guided by the Rule of Four and use tables and graphical representation to illustrate concepts. We have taken care to include numerical examples and diagrams, both in Examples and in Homework Problems, to offer students some intuitive understanding for the more abstract ideas of trigonometry. Above all, we have tried to focus on the fundamental ideas of trigonometry by introducing them in their most basic form and returning later to look at them in greater detail.  Katherine Yoshiwara  Atascadero, CA 2018  "
},
{
  "id": "Solving-Equations-Chap7",
  "level": "1",
  "url": "Solving-Equations-Chap7.html",
  "type": "Section",
  "number": "1.1",
  "title": "Solving Equations",
  "body": " Solving Equations  trigonometric equation solving  Introduction  We have seen that an equation of the form (for ) always has two solutions between and . For example, the figure below illustrates that and are solutions of the equation . These two solutions correspond to the two points on the unit circle where .   sine graph and unit circle  The calculator gives us only one of these solutions, but we can use reference angles to find the other solution. In fact, if we use a calculator to find one solution as , then the other solution is . You can see this by considering the symmetry of the sine graph, or of the unit circle, as shown below.   sine graph and unit circle  This relationship between the two solutions still holds if is negative, because the calculator returns a negative angle for . See the figure below.   sine graph and unit circle  Why is greater than in the figure above? Think about negative numbers: if is a negative number, then is greater than . For example, if , then  Solving Equations   Solutions of  Use your calculator to graph and for .  Use the Trace and intersect features to find the smallest solution to , accurate to two decimal places.  Look at the graph, and by symmetry write an expression for the second solution. Hint: What is the -coordinate of the first -intercept of ?  Solutions of  Use your calculator to graph and for  On your graph, locate the solution to given by .  Can you write an expression for the second solution similar to the expression you wrote in part (1c)?  Solutions of  Use your calculator to graph and for .  How many solutions are there to the equation ?  Look at the first two solutions. How are they related to the solutions of that you found in part (1)? Test your conjecture by using the Trace and intersect features.  If you know the first two solutions of , how can you find the other solutions? Hint: What is the period of ?  Solutions of  Repeat part (1) for and .  Repeat part (2) for and .  Repeat part (3) for and .   Solve for .  The calculator gives us the solution However, because this solution is not between and , we find a coterminal angle, for the solution in the fourth quadrant. The second quadrant solution is To four decimal places, the desired solutions are 3.7603 and 5.6645.  A similar method applies to equations of the form . The two solutions between and are and . Once again, you can see this by considering the symmetry of the cosine graph, or of the unit circle, as shown below.   cosine graph and unit circle  The relationship between the two solutions still holds if is negative. See the figure below.  cosine graph and unit circle  Solve for . 1.9391, 4.3441  Equations of the form are generally easier to solve, because there is only one solution in each cycle of the graph. Each solution differs from the previous one by , as shown below.  tangent function and slope  For example, to solve the equation for , we first calculate Because this angle is not between and , we add to find the next two solutions:  We summarize these observations for the three trigonometric functions as follows.  Solutions of Trigonometric Equations  trigonometric equation solving   The equation , has two solutions between and :  The equation , has two solutions between and :   The equation , has two solutions between and :    Solving Equations   Solutions of  Use your calculator to graph and for .  Use the Trace and intersect features to find the smallest solution to , accurate to two decimal places.  Look at the graph, and by symmetry write an expression for the second solution. Hint: What is the -coordinate of the first -intercept of ?  Solutions of  Use your calculator to graph and for  On your graph, locate the solution to given by .  Can you write an expression for the second solution similar to the expression you wrote in part (1c)?  Solutions of  Use your calculator to graph and for .  How many solutions are there to the equation ?  Look at the first two solutions. How are they related to the solutions of that you found in part (1)? Test your conjecture by using the Trace and intersect features.  If you know the first two solutions of , how can you find the other solutions? Hint: What is the period of ?  Solutions of  Repeat part (1) for and .  Repeat part (2) for and .  Repeat part (3) for and .    Multiple Solutions  If is an integer, what can we say about the solutions of the equation For example, how many solutions are there for the equation ? The figure below shows that this equation has four solutions between and . The graph of completes two cycles between and , and each cycle produces two solutions, for a total of four.   sin 2x graph and unit circle  Find all solutions of between and .  We begin as usual, by taking the inverse sine of each side of the equation, to get There are two values of between and with namely and . Solving these equations for yields and .  But these are only two of the four solutions! The graph of completes two cycles between and , each of length . We must add to each of the first two solutions to find the solutions in the second cycle. These two solutions are Note that the solutions in the second cycle are still less than , so they must be included in the set of all solutions between and . The four solutions are and .   Sketch a graph of for .  Find exact values for all solutions of between and .    cos 2x   As we observed earlier, equations involving the tangent function are easier to solve, because there is only one solution in each cycle of the graph. Once we have found one solution, we can find all the others by adding multiples of the period.  Find all solutions of between and .   We expect to find four solutions between and . The first angle between and whose tangent is 1 is , so the first solution is . Now, the period of the graph of is , as shown at right.  tan 2 t  There is one solution in each cycle, so we add multiples of to to find the other solutions. The four solutions are and .   Find all solutions of between and .  The larger the value of , the more cycles the graph completes between and , and the more solutions we find. Thus, for , there are six solutions of between and , eight solutions of , and so on. (See the figure below.)   sin 3x and sin 4x   Using a Calculator for Multiple Solutions  Of course, if is not one of the special values, we'll need a calculator to help us solve the equation.  Solve for .  We first solve for the trig ratio,  Next, we use a calculator to find two solutions of . The solutions of this equation, rounded to three decimal places, are Finally, because the period of the function is , we can find the other two solutions by adding to the first two solutions, to get To two decimal places, the four solutions are 0.66, 2.48, 3.80, and 5.62   Solve for . 0.24, 1.86, 2.33, 2,95, 4.43, 6.06   Using a Substitution  substitution to solve trigonometric equations  For more complicated equations, it can be helpful to use a substitution, in order to reduce the equation to the form or or . We want our substitution to replace the input of the sine function by a single variable. For example, in the next example, we substitute for the angle , so that the equation becomes .  Use a substitution to solve for .  We expect to find four solutions. Let , and use a calculator to find two solutions of . The solutions, rounded to three decimal places, are Because is not between and , we find a coterminal angle, Next we replace by to find two of the solutions of the original equation: Finally, because the period of the function is , we find the other two solutions by adding to the first two solutions, to get Rounded to hundredths, the four solutions are 0.97, 2.24, 4.11, and 5.38.  Use a substitution to solve for .  Here is our strategy for solving trigonometric equations by using a substitution.  Using a Substitution to Solve Trigonometric Equations  substitution to solve trigonometric equations To solve the equation or :   Substitute , and find two solutions for or .  Replace by in each solution, and solve for .  Find the other solutions by adding multiples of to the first two solutions.   To solve the equation :   Substitute , and find one solution for .  Replace by and solve for .  Find the other solutions by adding multiples of to the first solution.   Find all solutions between and to .  The graph of completes six cycles between and , so we expect to find six solutions, as illustrated below. We'll use the substitution to reduce the equation to . Next, we isolate the trig ratio.   Subtract 5 from both sides of the equation, then divide by 0.4. Now we can solve for .  5+0.4tan(3x-0.5)  Replacing by , we find the first solution. This value of is not between and , but because the period of is , we can add to any solution to find another solution. We stop here, because the next solution is greater than . Rounded to two decimal places, the six solutions are 0.92, 1.96, 3.01, 4.06, 5.10, and 6.15.    Graph from to .  Find all solutions of between and . Round your answers to two decimal places.   transformed tangent    Applications  Trigonometric equations often arise in the study of periodic models.  A piston is pumping vertically at a rate of 1000 cycles per second. The distance between its lowest and highest position is 16 centimeters.   Suppose the piston is at its midline position at and moving downwards. Find a formula for the sinusoidal function that gives the piston's height.  Use the formula to find the first two times the piston is 14 centimeters above its lowest position.    Because the piston starts at its midline and moves down, we will write as a sine function: The amplitude is , and the midline is . The period is , so , and .  Thus The graph is shown at right.  sinusoidal graph  With , we have We use the substitution and find two positive solutions of the equation . Replace by , and solve each equation for : Thus, the first two times the piston is at a height of 14 centimeters are approximately and seconds.   A lever on an oil well is pumping vertically at a rate of 10 cycles per minute. The distance between its lowest position at the ground and its highest position is 1.8 meters.   Suppose the lever is at its midline position at and moving downwards. Find a formula for the sinusoidal function that gives the lever's height.  Find the first two times that lever is 1 meter above its lowest position.   0.0518 minutes and 0.9823 minutes   Review the following skills you will need for this section.   Solve.            Algebra Refresher Answers            Section 7.3 Summary  Concepts   Solutions of Trigonometric Equations   The equation , has two solutions between and :  The equation , has two solutions between and :   The equation , has two solutions between and :    If is a positive integer, the equations and each have solutions between and , for .  The equation has one solution in each cycle of the graph.  For more complicated equations, it can be helpful to use a substitution to replace the input of the trig function by a single variable.  Using a Substitution to Solve Trigonometric Equations  To solve the equation or :   Substitute , and find two solutions for or .  Replace by in each solution, and solve for .  Find the other solutions by adding multiples of to the first two solutions.   To solve the equation :   Substitute , and find one solution for .  Replace by and solve for .  Find the other solutions by adding multiples of to the first solution.     Study Questions   If is one solution of the equation , what is other? Illustrate on a unit circle.  If is one solution of the equation , what is the other? Illustrate on a unit circle.  If is one solution of the equation , what is the other?  Explain why the equation , has solutions between and .   Skills   Find exact solutions to equations of the form #1 10  Find all solutions between and #11 16  Use a substitution to solve trigonometric equations #17 28  Write expressions for exact solutions #29 42  Solve problems involving trigonometric models #43 46     Homework 7-3  For Problems 1 10,  Use a graph to estimate all solutions between and .  Give exact values for the solutions between and .   , , ,   , , , ,   , , , , ,   , , ,   , , , , ,    For Problems 11 20, find all solutions between and . Round your answers to three decimal places.    , , , , , , ,   , , , , ,   , , ,   , , , , , ,    For Problems 21 28, use a substitution to find exact values for all solutions between and .  , , ,    , , , , ,     , , , , ,    For Problems 29 42, use a substitution to find all solutions between and . Round your answers to hundredths.  , , , , ,   , , , , ,   , ,   , , , , ,   , ,        The population of deer in Marquette County over the course of a typical year can be approximated by a sinusoidal function. The population reached a maximum of 50,000 deer on September 1, and a minimum of 42,000 deer on March 1.   Write a formula for the function that gives the deer population on the first of each month, where is September 1.  When is the deer population 45,000? Give exact expressions and approximations rounded to two decimal places.  Graph your function over one period, and label the points that correspond to a deer population of 45,000. Is the population greater or less than 45,000 between the two solutions?     months (Dec) or months (June)   sinusoidal graph  is less than 45,000 between and .   The percent of the moon visible from earth is a sinusoidal function ranging from 0% to 100%, with a period of 29.5 days.   Write a formula for the function that gives the percent of the moon that is visible, if a new moon (0% visible) occurs at days.  When is 25% of the moon visible? Give approximations rounded to two decimal places.  Graph your function over one period, and label the points that correspond to a quarter moon. Is more or less than 25% of the moon visible between the two solutions you found in part (b)?   A Ferris wheel has a diameter of 20 meters and completes one revolution every 60 seconds. Delbert is at the lowest position of the Ferris wheel, 1 meter above ground, when seconds.   Write a formula for the function that gives Delbert's altitude in meters after seconds.  When is Delbert at an altitude of 18 meters during his first revolution? Give exact expressions and approximations rounded to two decimal places.  Graph your function over one period, labeling the points that correspond to an altitude of 18 meters. Is Delbert above or below 18 meters between the two solutions you found in part (b)?    sec or sec   sinusoidal graph  Delbert is above 18 m between and .   High tides occur every 12.2 hours at Point Lookout. The depth of the water at the end of David's dock is 2.6 meters at high tide and 1.8 meters at low tide.   Write a formula for the function that gives the depth of the water hours after last night's high tide.  When is the water at the end of the dock 2 meters deep? Give approximations rounded to two decimal places.  Graph your function over one period, labeling the points that correspond to a depth of 2 meters. Is the water depth greater or less than 2 meters between the two solutions you found in part (b)?    "
},
{
  "id": "note-1",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#note-1",
  "type": "Note",
  "number": "1.1",
  "title": "",
  "body": "Why is greater than in the figure above? Think about negative numbers: if is a negative number, then is greater than . For example, if , then "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#activity-1",
  "type": "Activity",
  "number": "1.1",
  "title": "Solving Equations.",
  "body": "Solving Equations   Solutions of  Use your calculator to graph and for .  Use the Trace and intersect features to find the smallest solution to , accurate to two decimal places.  Look at the graph, and by symmetry write an expression for the second solution. Hint: What is the -coordinate of the first -intercept of ?  Solutions of  Use your calculator to graph and for  On your graph, locate the solution to given by .  Can you write an expression for the second solution similar to the expression you wrote in part (1c)?  Solutions of  Use your calculator to graph and for .  How many solutions are there to the equation ?  Look at the first two solutions. How are they related to the solutions of that you found in part (1)? Test your conjecture by using the Trace and intersect features.  If you know the first two solutions of , how can you find the other solutions? Hint: What is the period of ?  Solutions of  Repeat part (1) for and .  Repeat part (2) for and .  Repeat part (3) for and .  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-1",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": "Solve for .  The calculator gives us the solution However, because this solution is not between and , we find a coterminal angle, for the solution in the fourth quadrant. The second quadrant solution is To four decimal places, the desired solutions are 3.7603 and 5.6645. "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "Solve for . 1.9391, 4.3441 "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#activity-2",
  "type": "Activity",
  "number": "1.2",
  "title": "Solving Equations.",
  "body": "Solving Equations   Solutions of  Use your calculator to graph and for .  Use the Trace and intersect features to find the smallest solution to , accurate to two decimal places.  Look at the graph, and by symmetry write an expression for the second solution. Hint: What is the -coordinate of the first -intercept of ?  Solutions of  Use your calculator to graph and for  On your graph, locate the solution to given by .  Can you write an expression for the second solution similar to the expression you wrote in part (1c)?  Solutions of  Use your calculator to graph and for .  How many solutions are there to the equation ?  Look at the first two solutions. How are they related to the solutions of that you found in part (1)? Test your conjecture by using the Trace and intersect features.  If you know the first two solutions of , how can you find the other solutions? Hint: What is the period of ?  Solutions of  Repeat part (1) for and .  Repeat part (2) for and .  Repeat part (3) for and .  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-2",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "Find all solutions of between and .  We begin as usual, by taking the inverse sine of each side of the equation, to get There are two values of between and with namely and . Solving these equations for yields and .  But these are only two of the four solutions! The graph of completes two cycles between and , each of length . We must add to each of the first two solutions to find the solutions in the second cycle. These two solutions are Note that the solutions in the second cycle are still less than , so they must be included in the set of all solutions between and . The four solutions are and . "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": " Sketch a graph of for .  Find exact values for all solutions of between and .    cos 2x  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-3",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": "Find all solutions of between and .   We expect to find four solutions between and . The first angle between and whose tangent is 1 is , so the first solution is . Now, the period of the graph of is , as shown at right.  tan 2 t  There is one solution in each cycle, so we add multiples of to to find the other solutions. The four solutions are and .  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-3",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "Find all solutions of between and . "
},
{
  "id": "example-4",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-4",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": "Solve for .  We first solve for the trig ratio,  Next, we use a calculator to find two solutions of . The solutions of this equation, rounded to three decimal places, are Finally, because the period of the function is , we can find the other two solutions by adding to the first two solutions, to get To two decimal places, the four solutions are 0.66, 2.48, 3.80, and 5.62  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-4",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "Solve for . 0.24, 1.86, 2.33, 2,95, 4.43, 6.06 "
},
{
  "id": "example-5",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-5",
  "type": "Example",
  "number": "1.10",
  "title": "",
  "body": "Use a substitution to solve for .  We expect to find four solutions. Let , and use a calculator to find two solutions of . The solutions, rounded to three decimal places, are Because is not between and , we find a coterminal angle, Next we replace by to find two of the solutions of the original equation: Finally, because the period of the function is , we find the other two solutions by adding to the first two solutions, to get Rounded to hundredths, the four solutions are 0.97, 2.24, 4.11, and 5.38. "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-5",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "Use a substitution to solve for . "
},
{
  "id": "example-6",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-6",
  "type": "Example",
  "number": "1.12",
  "title": "",
  "body": "Find all solutions between and to .  The graph of completes six cycles between and , so we expect to find six solutions, as illustrated below. We'll use the substitution to reduce the equation to . Next, we isolate the trig ratio.   Subtract 5 from both sides of the equation, then divide by 0.4. Now we can solve for .  5+0.4tan(3x-0.5)  Replacing by , we find the first solution. This value of is not between and , but because the period of is , we can add to any solution to find another solution. We stop here, because the next solution is greater than . Rounded to two decimal places, the six solutions are 0.92, 1.96, 3.01, 4.06, 5.10, and 6.15.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-6",
  "type": "Checkpoint",
  "number": "1.13",
  "title": "",
  "body": " Graph from to .  Find all solutions of between and . Round your answers to two decimal places.   transformed tangent  "
},
{
  "id": "example-7",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#example-7",
  "type": "Example",
  "number": "1.14",
  "title": "",
  "body": "A piston is pumping vertically at a rate of 1000 cycles per second. The distance between its lowest and highest position is 16 centimeters.   Suppose the piston is at its midline position at and moving downwards. Find a formula for the sinusoidal function that gives the piston's height.  Use the formula to find the first two times the piston is 14 centimeters above its lowest position.    Because the piston starts at its midline and moves down, we will write as a sine function: The amplitude is , and the midline is . The period is , so , and .  Thus The graph is shown at right.  sinusoidal graph  With , we have We use the substitution and find two positive solutions of the equation . Replace by , and solve each equation for : Thus, the first two times the piston is at a height of 14 centimeters are approximately and seconds.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-7",
  "type": "Checkpoint",
  "number": "1.15",
  "title": "",
  "body": "A lever on an oil well is pumping vertically at a rate of 10 cycles per minute. The distance between its lowest position at the ground and its highest position is 1.8 meters.   Suppose the lever is at its midline position at and moving downwards. Find a formula for the sinusoidal function that gives the lever's height.  Find the first two times that lever is 1 meter above its lowest position.   0.0518 minutes and 0.9823 minutes  "
},
{
  "id": "project-1",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#project-1",
  "type": "Algebra Refresher",
  "number": "1.3",
  "title": "",
  "body": " Solve.            Algebra Refresher Answers          "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-8",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": ", , , "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-9",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": ""
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-10",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": ", , , , "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-11",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": ""
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-12",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-13",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": ""
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-14",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": ", , , "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-15",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": ""
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-16",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-17",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": ""
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-18",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": ""
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-19",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": ""
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-20",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": ", , , , , , , "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-21",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": ""
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-22",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-23",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": ""
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-24",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": ", , , "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-25",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": ""
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-26",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": ", , , , , , "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-27",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": ""
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-28",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": ", , ,  "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-29",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": ""
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-30",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-31",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": ""
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-32",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": ""
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-33",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": ""
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-34",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-35",
  "type": "Exercise",
  "number": "28",
  "title": "",
  "body": ""
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-36",
  "type": "Exercise",
  "number": "29",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-37",
  "type": "Exercise",
  "number": "30",
  "title": "",
  "body": ""
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-38",
  "type": "Exercise",
  "number": "31",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-39",
  "type": "Exercise",
  "number": "32",
  "title": "",
  "body": ""
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-40",
  "type": "Exercise",
  "number": "33",
  "title": "",
  "body": ", , "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-41",
  "type": "Exercise",
  "number": "34",
  "title": "",
  "body": ""
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-42",
  "type": "Exercise",
  "number": "35",
  "title": "",
  "body": ", , , , , "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-43",
  "type": "Exercise",
  "number": "36",
  "title": "",
  "body": ""
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-44",
  "type": "Exercise",
  "number": "37",
  "title": "",
  "body": ", , "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-45",
  "type": "Exercise",
  "number": "38",
  "title": "",
  "body": ""
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-46",
  "type": "Exercise",
  "number": "39",
  "title": "",
  "body": ""
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-47",
  "type": "Exercise",
  "number": "40",
  "title": "",
  "body": ""
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-48",
  "type": "Exercise",
  "number": "41",
  "title": "",
  "body": ""
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-49",
  "type": "Exercise",
  "number": "42",
  "title": "",
  "body": ""
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-50",
  "type": "Exercise",
  "number": "43",
  "title": "",
  "body": "The population of deer in Marquette County over the course of a typical year can be approximated by a sinusoidal function. The population reached a maximum of 50,000 deer on September 1, and a minimum of 42,000 deer on March 1.   Write a formula for the function that gives the deer population on the first of each month, where is September 1.  When is the deer population 45,000? Give exact expressions and approximations rounded to two decimal places.  Graph your function over one period, and label the points that correspond to a deer population of 45,000. Is the population greater or less than 45,000 between the two solutions?     months (Dec) or months (June)   sinusoidal graph  is less than 45,000 between and .  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-51",
  "type": "Exercise",
  "number": "44",
  "title": "",
  "body": "The percent of the moon visible from earth is a sinusoidal function ranging from 0% to 100%, with a period of 29.5 days.   Write a formula for the function that gives the percent of the moon that is visible, if a new moon (0% visible) occurs at days.  When is 25% of the moon visible? Give approximations rounded to two decimal places.  Graph your function over one period, and label the points that correspond to a quarter moon. Is more or less than 25% of the moon visible between the two solutions you found in part (b)?  "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-52",
  "type": "Exercise",
  "number": "45",
  "title": "",
  "body": "A Ferris wheel has a diameter of 20 meters and completes one revolution every 60 seconds. Delbert is at the lowest position of the Ferris wheel, 1 meter above ground, when seconds.   Write a formula for the function that gives Delbert's altitude in meters after seconds.  When is Delbert at an altitude of 18 meters during his first revolution? Give exact expressions and approximations rounded to two decimal places.  Graph your function over one period, labeling the points that correspond to an altitude of 18 meters. Is Delbert above or below 18 meters between the two solutions you found in part (b)?    sec or sec   sinusoidal graph  Delbert is above 18 m between and .  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "Solving-Equations-Chap7.html#exercise-53",
  "type": "Exercise",
  "number": "46",
  "title": "",
  "body": "High tides occur every 12.2 hours at Point Lookout. The depth of the water at the end of David's dock is 2.6 meters at high tide and 1.8 meters at low tide.   Write a formula for the function that gives the depth of the water hours after last night's high tide.  When is the water at the end of the dock 2 meters deep? Give approximations rounded to two decimal places.  Graph your function over one period, labeling the points that correspond to a depth of 2 meters. Is the water depth greater or less than 2 meters between the two solutions you found in part (b)?  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
