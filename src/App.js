import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <form className="order-form">
          <fieldset className="form-field">
            <legend className="form-field-label">
              Size
            </legend>
            <div className="form-field-element">
              <label className="radio-input">
                <input
                  name="size"
                  value="small"
                  type="radio"
                  checked
                />
                Small
              </label>
              <label className="radio-input">
                <input
                  name="size"
                  value="medium"
                  type="radio"
                />
                Medium
              </label>
              <label className="radio-input">
                <input
                  name="size"
                  value="large"
                  type="radio"
                />
                Large
              </label>
            </div>
          </fieldset>
          <fieldset className="form-field">
            <legend className="form-field-label">
              Crust
            </legend>
            <div className="form-field-element">
              <label className="radio-input">
                <input
                  name="crust"
                  value="neapolitan"
                  type="radio"
                  checked
                />
                Neapolitan
              </label>
              <label className="radio-input">
                <input
                  name="crust"
                  value="new-york"
                  type="radio"
                />
                New York
              </label>
              <label className="radio-input">
                <input
                  name="crust"
                  value="gluten-free"
                  type="radio"
                />
                Gluten-free
              </label>
            </div>
          </fieldset>
          <div className="form-field">
            <label className="form-field-label">
              Sauce
            </label>
            <div className="form-field-element">
              <select name="sauce">
                <option value="" selected disabled>
                  ...
                </option>
                <option value="bbq">BBQ</option>
                <option value="olive-oil">Olive Oil</option>
                <option value="pesto">Pesto</option>
                <option value="red-sauce">Red Sauce</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label className="form-field-label">
              Cheese
            </label>
            <div className="form-field-element">
              <label className="checkbox-input">
                <input
                  name="cheese"
                  value="mozzarella"
                  type="checkbox"
                  checked
                />
                Mozzarella
              </label>
              <label className="checkbox-input">
                <input
                  name="cheese"
                  value="gorgonzola"
                  type="checkbox"
                />
                Gorgonzola
              </label>
              <label className="checkbox-input">
                <input
                  name="cheese"
                  value="parmesan"
                  type="checkbox"
                  checked
                />
                Parmesan
              </label>
              <label className="checkbox-input">
                <input
                  name="cheese"
                  value="vegan-mozzarella"
                  type="checkbox"
                />
                Vegan mozzarella
              </label>
            </div>
          </div>
          <fieldset className="form-field">
            <legend className="form-field-label">
              Toppings (3 out of 6 selected)
            </legend>
            <div className="form-field-element">
              <fieldset className="form-field">
                <legend className="form-field-label">
                  Vegetables
                </legend>
                <div className="form-field-element">
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="artichokes"
                      type="checkbox"
                      checked
                    />
                    Artichokes
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="black-olives"
                      type="checkbox"
                    />
                    Black olives
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="cilantro"
                      type="checkbox"
                    />
                    Cilantro
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="fresh-basil"
                      type="checkbox"
                    />
                    Fresh basil
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="garlic"
                      type="checkbox"
                    />
                    Garlic
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="grape-tomatoes"
                      type="checkbox"
                    />
                    Grape tomatoes
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="green-peppers"
                      type="checkbox"
                    />
                    Green peppers
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="jalapenos"
                      type="checkbox"
                    />
                    Jalapenos
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="mushrooms"
                      type="checkbox"
                    />
                    Mushrooms
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="red-onions"
                      type="checkbox"
                    />
                    Red onions
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="toppings"
                      value="red-peppers"
                      type="checkbox"
                      disabled
                    />
                    Red peppers
                  </label>
                </div>
              </fieldset>
              <fieldset className="form-field">
                <legend className="form-field-label">
                  Meats
                </legend>
                <div className="form-field-element">
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="meatballs"
                      type="checkbox"
                      checked
                    />
                    Meatballs
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="chicken"
                      type="checkbox"
                    />
                    Chicken
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="bacon"
                      type="checkbox"
                    />
                    Bacon
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="pepperoni"
                      type="checkbox"
                    />
                    Pepperoni
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="sausage"
                      type="checkbox"
                    />
                    Sausage
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="vegan-meatballs"
                      type="checkbox"
                    />
                    Vegan meatballs
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="meats"
                      value="vegan-sausage"
                      type="checkbox"
                      disabled
                    />
                    Vegan sausage
                  </label>
                </div>
              </fieldset>
              <fieldset className="form-field">
                <legend className="form-field-label">
                  Spices
                </legend>
                <div className="form-field-element">
                  <label className="checkbox-input">
                    <input
                      name="spices"
                      value="black-pepper"
                      type="checkbox"
                      checked
                    />
                    Black pepper
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="spices"
                      value="oregano"
                      type="checkbox"
                    />
                    Oregano
                  </label>
                  <label className="checkbox-input">
                    <input
                      name="spices"
                      value="sea-salt"
                      type="checkbox"
                      disabled
                    />
                    Sea salt
                  </label>
                </div>
              </fieldset>
            </div>
          </fieldset>
          <div className="form-field">
            <label className="form-field-label">Note</label>
            <div className="form-field-element">
              <textarea name="note"></textarea>
            </div>
          </div>
        </form>
        <div className="order-summary">
          <div className="order-summary-heading">
            ORDER SUMMARY
          </div>
          <div className="summary-list">
            <div className="summary-list-item summary-list-item--inline">
              <span className="summary-list-item__key">
                Size
              </span>
              <span className="summary-list-item__value">
                Small
              </span>
            </div>
            <div className="summary-list-item summary-list-item--inline">
              <span className="summary-list-item__key">
                Crust
              </span>
              <span className="summary-list-item__value">
                Neapolitan
              </span>
            </div>
            <div className="summary-list-item summary-list-item--inline">
              <span className="summary-list-item__key">
                Sauce
              </span>
              <span className="summary-list-item__value">
                &mdash;
              </span>
            </div>
            <div className="summary-list-item summary-list-item--block">
              <span className="summary-list-item__key">
                Cheese
              </span>
              <span className="summary-list-item__value">
                Mozzarella, Parmesan
              </span>
            </div>
            <div className="summary-list-item summary-list-item--block">
              <span className="summary-list-item__key">
                Vegetables
              </span>
              <span className="summary-list-item__value">
                Artichokes
              </span>
            </div>
            <div className="summary-list-item summary-list-item--block">
              <span className="summary-list-item__key">
                Meats
              </span>
              <span className="summary-list-item__value">
                Meatballs
              </span>
            </div>
            <div className="summary-list-item summary-list-item--block">
              <span className="summary-list-item__key">
                Spices
              </span>
              <span className="summary-list-item__value">
                Black pepper
              </span>
            </div>
            <div className="summary-list-item summary-list-item--block">
              <div className="summary-list-item__key">
                Note
              </div>
              <div className="summary-list-item__value">
                &mdash;
              </div>
            </div>
          </div>
          <div>
            <button className="button">Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
