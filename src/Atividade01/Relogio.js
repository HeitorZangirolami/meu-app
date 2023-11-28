import React, { Component } from 'react';
import './Relogio.css';

class Relogio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horario: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.atualizarHorario();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  atualizarHorario() {
    this.setState({ horario: new Date() });
  }

  render() {
    const { horario } = this.state;
    const formatedData = horario.toLocaleDateString('pt-br');
    const formatedHorario = horario.toLocaleTimeString('pt-br');
    const horarioCompleto = formatedData + ' ' + formatedHorario;

    return (
      <div>
        <h2>{horarioCompleto}</h2>
      </div>
    );
  }
}

export default Relogio;
