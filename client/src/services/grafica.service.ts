import { Injectable } from "@angular/core";
import { Chart } from "chart.js";

@Injectable({
  providedIn: "root"
})
export class GraficaService {
  constructor() {}
  show: boolean = true;
  stats: boolean = true;
  winRate: number;
  played: number;
  wonMatches: number;
  canvas: any = {};
  userEndedMatches: any;
  public chart = [];

  showPlayedGames(matches, user, x) {
    return matches.filter(match => {
      let date = new Date(match.finish);
      if (match._author._id == user._id && date.getMonth() == x) {
        return match;
      }
    }).length;
  }

  // printLine(user, canvas) {
  //   this.matchService.showFinishMatches().subscribe(matches => {
  //     this.canvas = <HTMLCanvasElement>document.getElementById(`${canvas}`);
  //     var ctx = this.canvas.getContext("2d");
  //     this.chart = new Chart(ctx, {
  //       type: "line",
  //       data: {
  //         labels: [
  //           "Enero",
  //           "Febrero",
  //           "Marzo",
  //           "Abril",
  //           "Mayo",
  //           "Junio",
  //           "Julio",
  //           "Agosto",
  //           "Septiembre",
  //           "Octubre",
  //           "Noviembre",
  //           "Diciembre"
  //         ],
  //         datasets: [
  //           {
  //             data: [
  //               this.showPlayedGames(matches, user, 0),
  //               this.showPlayedGames(matches, user, 1),
  //               this.showPlayedGames(matches, user, 2),
  //               this.showPlayedGames(matches, user, 3),
  //               this.showPlayedGames(matches, user, 4),
  //               this.showPlayedGames(matches, user, 5),
  //               this.showPlayedGames(matches, user, 6),
  //               this.showPlayedGames(matches, user, 7),
  //               this.showPlayedGames(matches, user, 8),
  //               this.showPlayedGames(matches, user, 9),
  //               this.showPlayedGames(matches, user, 10),
  //               this.showPlayedGames(matches, user, 11)
  //             ],
  //             label: "Partidos Jugados",
  //             borderColor: "#3e95cd",
  //             fill: false
  //           }
  //         ]
  //       },
  //       options: {
  //         responsive:true,
  //         maintainAspectRatio: false,
  //         scales: {
  //           yAxes: [{
  //             display:false,
  //               ticks: {
  //                   suggestedMin: 0,
  //               }
  //           }]
  //       },
  //         title: {
  //           display: true
  //         }
  //       }
  //     });
  //   });
  // }

  printRadar(user, canvas) {
    this.played = user.wonMatches + user.lostMatches;
    this.wonMatches = user.wonMatches;
    this.winRate = user.wonMatches / (user.wonMatches + user.lostMatches);
    this.canvas = <HTMLCanvasElement>document.getElementById(`${canvas}`);
    var ctx = this.canvas.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "radar",

      data: {
        labels: ["Drive", "Backhand", "Serve", "Volley", "Resistance"],
        datasets: [
          {
            label: "Your Statistics",
            data: [
              user.statisticsAverage.drive.length == 0
                ? 5
                : user.statisticsAverage.drive.reduce((a, b) => a + b) /
                  user.statisticsAverage.drive.length,
              user.statisticsAverage.backhand.length == 0
                ? 5
                : user.statisticsAverage.backhand.reduce((a, b) => a + b) /
                  user.statisticsAverage.backhand.length,
              user.statisticsAverage.serve.length == 0
                ? 5
                : user.statisticsAverage.serve.reduce((a, b) => a + b) /
                  user.statisticsAverage.serve.length,
              user.statisticsAverage.volley.length == 0
                ? 5
                : user.statisticsAverage.volley.reduce((a, b) => a + b) /
                  user.statisticsAverage.volley.length,
              user.statisticsAverage.resistance.length == 0
                ? 5
                : user.statisticsAverage.resistance.reduce((a, b) => a + b) /
                  user.statisticsAverage.resistance.length
            ],
            borderColor: "rgba(20, 29, 222, 1)",
            backgroundColor: "rgba(20, 29, 222, 0.2)"
          },
          {
            label: ["  Media"],
            data: [1, 2, 5, 8, 4],
            borderColor: "rgba(255, 99, 132, 0.2)",
            backgroundColor: "rgba(255, 99, 132, 0.2)"
          }
        ]
      },
      options: {
        position: "left",
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom",
          labels: {}
        },
        scale: {
          // Hides the scale
          ticks: {
            // changes here
            display:false,
            max: 10,
            min: 0
          }
        }
      }
    });
  }
}
