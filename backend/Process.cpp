#include "Process.h"

Process::Process(int id, int arrival, int duration)
    : id(id), arrival(arrival), duration(duration),
      start(-1), finish(-1), waiting(-1), turnaround(-1) {}