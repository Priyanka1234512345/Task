var list1 = ["a","b","c","d","e"];					
var list2 = ["a => b","b => c", "c => d"];		
var result =[];
var task = new Map();
var dependency = new Map();
var checkTaskDependancy;
var i;
function checkTaskDependancy(task,dependency,result)
{
  for (i = 0; i < list1.length; i++) {
    task.set(list1[i],"");
    dependency.set(list1[i],"");
}
  for (i = 0; i < list2.length; i++) {
      var arr = [];
      arr[i]=list2[i].split(" => ");
      task.set(arr[i][0],arr[i][1]);
      dependency.set(arr[i][1],arr[i][0]);
      }
  var iscycle=false;
  while(check(task,dependency,result))
  {
    var answer=calculate(task,dependency,result);
    if(answer==false)
    {
      iscycle=true;
      break;
    }
        
  }
  if(iscycle==true)
   {
        console.log("Error - this is a cyclic dependency");
  }
  else
  {
          console.log(result);
  }
  }
function check(task, dependency, result) {
	for (let [key, value] of task) {
    	if(value.length!=0)
        {
        	return true;
        }
       }
    for (let [key, value] of dependency)
    {
    	result.push(key);
    }
    return false;
}
function calculate(task, dependency, result) {
  for (let [key, value] of task) {
  if(value.length==0)
  {
    var set=dependency.get(key);
    for (let item of set) 
    {
    	task.set(item,"");
    }
    result.push(key);
    dependency.delete(key);
    task.delete(key);
    return true;
   }
   }
   return false;
}
checkTaskDependancy(task, dependency, result);

