package com.server.service;

import com.server.repository.StateRepository;

public class StateService {
    private StateRepository stateRepository;

    public StateService(StateRepository stateRepository){
        this.stateRepository=stateRepository;
    }
}
