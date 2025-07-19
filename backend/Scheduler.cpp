#include "Scheduler.h"
#include <fstream>
#include <iostream>

Scheduler::Scheduler(const std::vector<Process>& processes) : processes(processes) {}

void Scheduler::runFCFS() {
    int currentTime = 0;
    for (auto& p : processes) {
        p.start = std::max(currentTime, p.arrival);
        p.waiting = p.start - p.arrival;
        p.finish = p.start + p.duration;
        p.turnaround = p.finish - p.arrival;
        currentTime = p.finish;
    }
}

void Scheduler::printResults() const {
    std::cout << "ID\tLlegada\tDuración\tInicio\tFin\tEspera\tRetorno\n";
    for (const auto& p : processes) {
        std::cout << p.id << "\t" << p.arrival << "\t" << p.duration << "\t"
                  << p.start << "\t" << p.finish << "\t"
                  << p.waiting << "\t" << p.turnaround << "\n";
    }
}

void Scheduler::exportCSV(const std::string& filename) const {
    std::ofstream file(filename);
    file << "id,arrival,duration,start,finish,waiting,turnaround\n";
    for (const auto& p : processes) {
        file << p.id << "," << p.arrival << "," << p.duration << ","
             << p.start << "," << p.finish << "," << p.waiting << "," << p.turnaround << "\n";
    }
}

void Scheduler::exportJSON(const std::string& filename) const {
    std::ofstream file(filename);
    file << "{\n  \"processes\": [\n";
    for (size_t i = 0; i < processes.size(); ++i) {
        const auto& p = processes[i];
        file << "    {\n"
             << "      \"id\": " << p.id << ",\n"
             << "      \"arrival\": " << p.arrival << ",\n"
             << "      \"duration\": " << p.duration << ",\n"
             << "      \"start\": " << p.start << ",\n"
             << "      \"finish\": " << p.finish << ",\n"
             << "      \"waiting\": " << p.waiting << ",\n"
             << "      \"turnaround\": " << p.turnaround << "\n"
             << "    }";
        if (i < processes.size() - 1) file << ",";
        file << "\n";
    }
    file << "  ]\n}\n";
}