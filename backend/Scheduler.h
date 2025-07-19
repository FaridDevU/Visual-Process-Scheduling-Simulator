#pragma once
#include "Process.h"
#include <vector>
#include <string>

class Scheduler {
    std::vector<Process> processes;
public:
    Scheduler(const std::vector<Process>& processes);
    void runFCFS();
    void printResults() const;
    void exportCSV(const std::string& filename) const;
    void exportJSON(const std::string& filename) const;
};