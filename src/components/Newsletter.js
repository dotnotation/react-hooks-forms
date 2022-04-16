import React, { useState } from "react";

function Newsletter() {
    const [newsletter, setNewsletter] = useState(false);
  
    function handleNewsletterChange(event) {
      // .checked, not .value!
      setNewsletter(event.target.checked);
    }
  
    return (
      <form>
        <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
        <input
          type="checkbox"
          id="newsletter"
          onChange={handleNewsletterChange}
          checked={newsletter}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default Newsletter;