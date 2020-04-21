# Angular Testing Exercises
### 🦸‍♀️Level up your Angular Test-Fu 

<details>
    <summary markdown="span">
        <b>💻 Exercise 1 - Get to know the application</b>
    </summary>
    <br/>
    
Please take a look at the existing Tour of Heros application - <a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises" target="_blank">Existing Tour of Heros</a>

1. Click through the UI
2. Notice we are using Angular Routing
3. Notice the components:
   - dashboard
   - hero-detail
   - hero-search
   - heroes
4. Notice the hero.service.ts
5. Notice the message.service.ts 
</details>

---

<details>
    <summary markdown="span">
        <b>💻 Exercise 2 - Test setup</b>
    </summary>
    <br>
    <a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-2?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.spec.ts" target="_blank">Open Exercise</a>

<br>
You will learn: Setup a TestBed

There are probably a lot of questions that popped up.
We tried to cover them in a <a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-2?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.spec-2.ts" target="_blank">roundup</a>

</details>

---

<details>
    <summary markdown="span">
        <b>💻 Exercise 3 - Test the hero-detail component</b>
    </summary>
    <br>
We have two different exercise here you can choose from:<br><br>

<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-3?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.spec-3.ts" target="_blank">Open Exercise - 1</a>

You will learn:
  - render the component under test 
  - test the component DOM
  - write meaningful test descriptions
---

<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-7-banner?file=src%2Fapp%2Fbanner%2Fbanner.component.dom.spec.ts" target="_blank">Open Exercise - 2</a>

You will learn:
  - writing CSS selectors 
  - how to trigger change detection and when this is necessary 
</details>

---

<details>
    <summary markdown="span">
        <b>💻 Exercise 4 - Testing ViewChilds</b>
    </summary>
    <br>
    There are many different approaches to testing with <code>@ViewChild</code>'s
It is hard to tell which one is fitting the best for you, as this is dependent on the use case.<br><br>

<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-4-1?file=src%2Fapp%2Fviewchild%2Fparent.component.spec.ts" target="_blank">Exercise ViewChild Testing - 1</a>: using Spies<br>
<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-4-2?file=src%2Fapp%2Fviewchild%2Fchild.component.stubbed.spec.ts" target="_blank">Exercise ViewChild Testing - 2</a>: using Stubs & Spies<br>
<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-4-3?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.spec-4.ts" target="_blank">Exercise ViewChild Testing - 3</a>: using ViewChild architecture pattern <i>(sometimes needed for high performant compontents)</i>
</details>

---

<details>
    <summary markdown="span">
        <b>💻 Exercise 5 - Container Components & Presentational Components</b>
    </summary>
    <br>
Using so called Container and Presentational Components can make our testing life easier. 
But it's no just our testing life. The overall developer experience should become better when using this approach.
We should strive for this pattern when creating new components.
<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-5?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.spec-4.ts" target="_blank">Open Exercise</a>
</details>

---

<details>
    <summary markdown="span">
        <b>💻 Exercise 6 - Writing reusable (testing) modules</b>
    </summary>
    <br>
<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-6?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.spec-3.ts" target="_blank">Open Exercise</a>
</details>

---

<details>
    <summary markdown="span">
        <b>💻 Exercise 7 - Testing Pipes</b>
    </summary>
    <br>
<a href="https://stackblitz.com/github/AURENA-Tech/angular-testing-exercises/tree/exercise-8?file=src%2Fapp%2Fpipe%2Fenrich.pipe.ts" target="_blank">Open Exercise</a>
</details>

