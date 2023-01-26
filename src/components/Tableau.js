import React, { useEffect, useState } from "react";
import { CronJob } from "cron";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const Tableau = () => {
  const [toggleData, setToggleData] = useState();
  const bitCoin = async () => {
    try {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      ).then((res) => res.json());
      // .then((json) => console.log(json));

      setToggleData(res);

      return res;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    bitCoin();
    console.log(bitCoin());
  }, []);

  //cron

  let cronJob = new CronJob(
    "* * * * * *",
    function () {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => response.json())
        .then((data) => {
          const price = data.bpi.EUR.rate;
          console.log(price);
        });
    },
    null,
    true,
    "America/Los_Angeles"
  );
  cronJob.start();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Cours du Bitcoin récent",
      },
    },
  };
  const labels = ["Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"];

  const data = {
    labels,
    datasets: [
      {
        label: "Son cours en €",
        data:
          // Injecter les données récoltées par le cronJob
          ["20000", "20000", "20000", "20000", "20000", "20000", "20000"],
        borderColor: "#A8201A",
        backgroundColor: "#A8201A",
      },
    ],
  };

  return (
    <>
      <div className="flex mt-10 mb-10">
        <div className="w-1/3 p-4 bg-white rounded-lg mr-2 ml-2">
          {/*toggleData && JSON.stringify(toggleData)*/}
          <p className="text-center valeur">
            Valeur actuelle : 1 <i class="fa-brands fa-bitcoin"></i> ={" "}
            {toggleData && toggleData.bpi.EUR.rate} €
          </p>
          <p className="text-center valeur">
            au {toggleData && toggleData.time.updated}
          </p>
          <p className="text-center valeur mt-8">
            Valeur la plus haute : 62976,65 € le 19/10/21
          </p>
        </div>

        <div className="w-2/3 p-4 bg-white rounded-lg mr-2 ml-2">
          <div className="container">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

//appeler ma fonction bitCoin() en dehors du useEffect afin de recuperer les données et pouvoir les afficher
