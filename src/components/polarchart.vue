<template>
  <canvas ref="polarCanvas"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import config from '../config.js';

Chart.register(...registerables);

export default {
  name: 'polarChart',
  data() {
    return {
      configdata:config,
      skills: null,
      skillPoints: null,
      chart: null,
    };
  },
  mounted() {
    if(import.meta.env.VITE_CONFIG){
        this.configdata = JSON.parse(import.meta.env.VITE_CONFIG);
    }
    this.skills = this.configdata.polarChart.skills;
    this.skillPoints = this.configdata.polarChart.skillPoints;
    this.renderChart();
  },
  methods: {
    generateColors(count) {
      const palette = [
        'rgba(178, 224, 255, 0.72)',
        'rgba(128, 191, 255, 0.70)',
        'rgba(255, 215, 0, 0.62)',
        'rgba(122, 232, 199, 0.62)',
        'rgba(255, 164, 124, 0.62)',
        'rgba(194, 181, 255, 0.62)',
        'rgba(255, 132, 173, 0.60)',
        'rgba(144, 238, 144, 0.58)',
      ];
      return Array.from({ length: count }, (_, index) => palette[index % palette.length]);
    },
    renderChart() {
      const ctx = this.$refs.polarCanvas.getContext('2d');
      const colors = this.generateColors(this.skills.length);
      this.chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: this.skills,
          datasets: [{
            label: '技能点',
            data: this.skillPoints,
            backgroundColor: colors,
            borderColor: colors.map(color => color.replace(/0\.\d+\)/, '1)')),
            borderWidth: 2,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: 'rgba(40, 40, 40, 0.7)',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderWidth: 2,
              padding: 10,
              caretSize: 6,
              caretPadding: 8,
              cornerRadius: 6,
              boxWidth: 10,
              boxHeight: 10,
              displayColors: true,
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || '';
                  return `${label}: ${value} 技能点`;
                },
                title: function(context) {
                  return `${context[0].label}`;
                },
              },
            },
          },
          scales: {
            r: {
              ticks: {
                display: false,
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.14)',
                lineWidth: 0.5,
              },
              angleLines: {
                color: 'rgba(255, 255, 255, 0.22)',
                lineWidth: 1,
              },
            },
          },
          animation: {
            duration: 1800,
            easing: 'easeOutQuad',
            animateRotate: true,
            animateScale: true,
          },
        },
      });
    },
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped>
</style>
