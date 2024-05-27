import React, { Component } from "react";

export class Prijava extends Component {
    state = {
        ime: '',
        grad: '',
        lozinka: '',
        brojClanova: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Ime ekipe", this.state.ime);
        console.log("Grad ekipe", this.state.grad);
        console.log("Lozinka ekipe", this.state.lozinka);
        console.log("Broj članova ekipe", this.state.brojClanova);
    }

    render() {
        return (
            <div className="prijava">
                
                <form>
                    <label>Ime:</label>
                    <input 
                        placeholder="ime ekipe" 
                        value={this.state.ime} 
                        onChange={e => this.setState({ ime: e.target.value })} 
                    />
                    <label>Grad iz kojeg dolazite</label>
                    <input 
                        placeholder="grad iz kojeg dolazite" 
                        value={this.state.grad} 
                        onChange={e => this.setState({ grad: e.target.value })} 
                    />
                    <label>Lozinka</label>
                    <input 
                        placeholder="lozinka" 
                        type="password"
                        value={this.state.lozinka} 
                        onChange={e => this.setState({ lozinka: e.target.value })} 
                    />
                    <label>Broj članova</label>
                    <input 
                        placeholder="broj članova" 
                        value={this.state.brojClanova} 
                        onChange={e => this.setState({ brojClanova: e.target.value })} 
                    />
                    <div className="botun"><button onClick={e => this.onSubmit(e)}>Potvrdi</button></div>
                </form>
                <h1>Prijavljena ekipa je {this.state.ime} iz {this.state.grad} i natječe se s {this.state.brojClanova} članova.</h1>
            </div>
        );
    }
}

export default Prijava;
