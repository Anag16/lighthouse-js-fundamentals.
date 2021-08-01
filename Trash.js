function smartGarbage(trash,bins){
  if(trash == "waste") {
    bins.waste = bins.waste + 1;
  }
  if(trash == "recycling"){
    bins.recycling = bins.recycling + 1;
  }
  if(trash == "compost"){
    bins.compost = bins.compost + 1;
  }
  return bins;
}