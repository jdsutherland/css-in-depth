## Notes

* Display: favor flexbox over table

* Never explicitly set the height of an element unless you have no other choice. Always seek an alternative approach first. Setting a height invariably leads to further complications.

### Centering
* flexbox makes it easy:

    <div style="display:flex;justify-content:center;align-items:center;">
      <div></div>
    </div>

* `vertical-align: middle` only works on inline and table-cell
* simplest way: give container eql top/bot padding, letting container and contents det. height naturally

lobotomized owl selector - selects all ele that aren't 1st child of parent

    body * + * {
      margin-top: 1.5em;
    }
