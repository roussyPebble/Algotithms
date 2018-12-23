class Solution {
    public int MinRefuelStops(int target, int startFuel, int[][] stations) {
         return recur(target, startFuel,stations.ToList(),0);
    }
    private int recur(int target, int startFuel, List<int[]> stations, int nbOfStop){
         if(startFuel>=target) return nbOfStop;
            int max=0,ind=0;
            for (int i=0;i<stations.Count() && startFuel>=stations[i][0];i++){
                if(stations[i][1]>max){
                    ind=i;
                    max=stations[i][1];
                }
            }
            if(max==0) {
                return -1;
            }else{
                stations.RemoveAt(ind);
                return recur(target, startFuel+max, stations,nbOfStop+1);
            }
    }
   
}
