import React from "react";
import styles from "../modules/Ranking.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function UserRank(props) {
  const carEmissions = (props.total_emission_per_day * 7) / 192;
  const bananaEmissions = (props.total_emission_per_day * 7) / 860;
  function calculateRanking() {
    const rank = props.rank;
    const total = props.total_entries;
    const ranking = (rank / total) * 100;
    return ranking.toFixed(2);
  }
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [
      "Users with higher carbon footprint in %",
      "Users with lower carbon footprint in %",
    ],
    datasets: [
      {
        data: [100 - calculateRanking(), calculateRanking()],
        backgroundColor: ["#70f98d", "rgba(0, 0, 0, 0.1)"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className={styles.ranking_wrapper}>
      <div className={styles.pie}>
        <p>{props.total_emission_per_day.toFixed(2)}g of CO2</p>
        <Doughnut data={data} options={options} />
      </div>
      <div>
        <h4>
          Your carbon footprint is higher than {calculateRanking()}% of the
          users.
        </h4>
        <p>
          You generated{" "}
          <em>{props.total_emission_per_day.toFixed(2)}g of CO2</em> in a day,
          in a week you would generate as much as driving{" "}
          <em>
            {carEmissions.toFixed(2)}
            km
          </em>{" "}
          in a car or as much as production of{" "}
          <em>{bananaEmissions.toFixed(2)} kg </em>
          of bananas.
        </p>
        <p>
          You placed <em>{props.rank}</em> out of{" "}
          <em>{props.total_entries} </em>users.
        </p>
      </div>
    </section>
  );
}

export default UserRank;
