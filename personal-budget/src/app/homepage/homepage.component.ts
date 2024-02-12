import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  host: {ngSkipHydration : 'true'}
})
export class HomepageComponent implements AfterViewInit{

    public dataSource = {
      datasets: [
          {
              data: [] as any[],
              backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#83FF33',
                '#F633FF',
                '#FF3333',
              ],
          }
      ],
      labels: [] as any[]
    };

    @ViewChild('myChart')
  eleRef!: ElementRef;

    constructor(private http: HttpClient, private chartRef: ElementRef){

    }


    ngAfterViewInit(): void {
      this.http.get('http://localhost:3000/budget')
      .subscribe((res: any) => {
        for(var i = 0; i < res.myBudget.length; i++){
            this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
            this.dataSource.labels[i] = res.myBudget[i].title;
      }

      this.createChart();

      });
    }

    createChart(){
      var ct = this.chartRef.nativeElement.querySelector('#myChart').getContext('2d');
      var myPieChart = new Chart(ct, {
          type: "pie",
          data: this.dataSource
      });
    }
  }