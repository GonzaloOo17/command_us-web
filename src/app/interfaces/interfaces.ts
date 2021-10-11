
// Interfaces para Login

export interface Login {
  user:  User;
  token: string;
}

export interface User {
  status:    boolean;
  name:      string;
  email:     string;
  surname:   string;
  role:      string;
  createdAt: Date;
  updatedAt: Date;
}


// Interfaces para getAllUsers

export interface GetAllUsers {
  total:    number;
  usuarios: Usuario[];
}

export interface Usuario {
  status:    boolean;
  name:      string;
  email:     string;
  surname:   string;
  role:      string;
  createdAt: Date;
  updatedAt: Date;
}


  // Interfaces para GetPanels 

  export interface GetPanels {
    total:  number;
    panels: Panel[];
}

export interface Panel {
    _id:       string;
    name:      string;
    stat:      Stat[];
    cfg:       CFG[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CFG {
    active: boolean;
}

export interface Stat {
    sensors: Sensors;
    active:  boolean;
}

export interface Sensors {
    total:       number;
    validating:  number;
    test_ko:     number;
    paused:      number;
    free:        number;
    finished_ok: number;
}


  
  //  Interface para los GetSensors
  
  export interface GetSensors {
    total:   number;
    sensors: Sensor[];
}

export interface Sensor {
    _id:       string;
    panelId:   number | string;
    state?:    any[];
    createdAt: Date;
    updatedAt: Date;
    stat:      Stat[];
    cfg:       any[];
}

export interface Stat {
    test:  Test;
    state: string;
}

export interface Test {
    idTest: number;
    start:  number;
}


  
  // Interface para GetSensorsById
  export interface SensorsByPanel {
    total:   number;
    sensors: Sensor[];
}

export interface Sensor {
    _id:       string;
    panelId:   number | string;
    stat:      Stat[];
    cfg:       any[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Stat {
    test:  Test;
    state: string;
}

export interface Test {
    idTest: number;
    start:  number;
}

// Interface para GetCommBySensor

export interface GetComm {
  total:        number;
  commutations: Commutation[];
}

export interface Commutation {
  timestamp: Date;
  channel:   number;
  value:     string;
  sensorId:  string;
  deviation: number;
  createdAt: Date;
  updatedAt: Date;
}





