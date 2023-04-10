import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <div class="container">
        <h2>Card Deck</h2>
        <p>The .card-deck class creates an <strong>equal height and width</strong> grid of cards. The layout will automatically adjust as you insert more cards.</p>
        <p>In this example we have added extra content to the first card, to make it taller. Notice how the other cards follow.</p>
        <p><strong>Note:</strong> The cards are displayed vertically on small screens (less than 576px):</p>
        <div class="card-deck">
          <div class="card bg-primary">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the first card</p>
              
            </div>
          </div>
          <div class="card bg-warning">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the second card</p>
            </div>
          </div>
          <div class="card bg-success">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the third card</p>
            </div>
          </div>
          <div class="card bg-danger">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the fourth card</p>
            </div>
          </div>
        </div>
      </div>


  
        </React.Fragment >
    )
}

export default Home;