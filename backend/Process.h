#pragma once

class Process {
public:
    int id;
    int arrival;
    int duration;
    int start;
    int finish;
    int waiting;
    int turnaround;

    Process(int id, int arrival, int duration);
};