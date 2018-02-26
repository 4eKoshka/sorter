class Sorter {
  constructor() {
	  this.a1=[];	  
    // your implementation
  }

  add(element) {
	  this.a1.push(element);
    // your implementation
  }

  at(index) {
	  return this.a1[index];
    // your implementation
  }

  get length() {
	 
	  return this.a1.length;
    // your implementation
  }

  toArray() {
	 
   return this.a1;
   // your implementation
  }

  sort(indices) {
	  var st;
	  var min;
	 			
	  for (var i=0; i < indices.length-1; i++) {
		  min = i;
		 for(var j= i+1; j < indices.length; j++) {
			 if (indices[j] < indices[min]) {min = j;}
			 
			st = indices[i];
			indices[i] = indices[min];
			indices[min] = st; 
				
			}
		}
		
		
		for (i = 0; i < indices.length-1; i++) {
			min= i;
			for(j= i+1; j < indices.length; j++) {
			 if (this.a1[indices[j]] < this.a1[indices[min]]) { min =j;}
			 
			st = this.a1[indices[i]];
			this.a1[indices[i]] = this.a1[indices[min]];
			this.a1[indices[min]] = st; 
					
			}
	  }
	  
	  return this.a1;
	  // your implementation
  }
	
	
     

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;