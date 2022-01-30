import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group m-2">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
            </div>
            <div className="form-group m-2">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control" />
            </div>
            <button className="btn btn-success btn-block m-2">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;