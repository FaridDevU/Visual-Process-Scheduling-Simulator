#include "Process.h"
#include "Scheduler.h"
#include <vector>
#include <fstream>
#include <sstream>
#include <iostream>

std::vector<Process> readProcesses(const std::string& filename) {
    std::vector<Process> processes;
    std::ifstream file(filename);
    std::string line;
    while (std::getline(file, line)) {
        std::istringstream iss(line);
        int id, arrival, duration;
        if (iss >> id >> arrival >> duration) {
            processes.emplace_back(id, arrival, duration);
        }
    }
    return processes;
}

int main() {
    std::vector<Process> processes = readProcesses("data/input.txt");
    Scheduler scheduler(processes);
    scheduler.runFCFS();
    scheduler.printResults();
    scheduler.exportCSV("output/output.csv");
    scheduler.exportJSON("output/output.json");
    return 0;
}