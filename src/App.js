import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";

import "./App.css";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

//sums the amount donated
const sumDonations = () => {
  let sum = 0;
  donations.map((donation) => {
    let amount = donation.amount;
    sum += amount;
  });
  return sum;
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            {/* Recent Donations */}
            <h2>Recent Donations</h2>
            {donations.map((donation) => {
              return (
                <RecentDonations
                  name={donation.name}
                  amount={donation.amount}
                  caption={donation.caption}
                />
              );
            })}
          </section>
          <section className="progress">
            {/* Progress */}
            {<Progress goal={targetAmount} total={sumDonations()} />}
            {/* Donation Form */}
            <hr />
            {<DonationForm />}
          </section>
        </main>
      </>
    );
  }
}
