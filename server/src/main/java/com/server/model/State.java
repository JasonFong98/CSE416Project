package com.server.model;

import com.fasterxml.jackson.databind.util.JSONPObject;

public class State {
    Demographic demographic;
    int numberOfSeats;
    Ensemble ensemble;
    JSONPObject precintBounday;
}
