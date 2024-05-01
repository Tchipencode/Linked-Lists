class Node{
   constructor(value=null, next=null){
      this.value=value,
      this.next=next;
   }
}
class LinkedList{
   constructor(){
      this.head=null;
   }
      // Add new node to the end of the list
      append(value){
         if(this.head==null){
            this.head=new Node(value);
            return this.head;
         } else{
            let node=this.head;
            while(node.next!==null){
               node=node.next;
               
            }
            node.next= new Node(value); 
            return node.next;        
         }
      }
      // Add new node to the start of the list
      prepend(value){
         this.head=new Node(value);
         return this.head;
      }
      // Return the total number of nodes in the list
      size= function size(){
         let count=0;
         let node=this.head;
         while(node){
            count++;
            node=node.next;
         }
         return count;
      }
      // return the first node in the list
      getHead(){
         if(this.head==null){
            console.log("no node");
         } else{
            return this.head;
         }
      }
      // Return the last node in the list
      getTail(){
         if(this.head==null){
            console.log("no node");
         } else{
            let lastNode=this.head;
            if(lastNode){
               while(lastNode.next){
                  lastNode=lastNode.next;
               }
            }
            return lastNode;
         }
      }
      // Return the node at the given index
      at(index){
         if(this.head==null){
            console.log("LinkList is empty");
         } else{
            let node=this.head;
            let count=0;
            while(node!==null){
               node= node.next;
               count++;
               if(index==count){
                  return node;
                  
               } else{
                  console.log("node don't exist");
                  
               }
            }
         }
      }
      // Remove the last element from the list
      pop(){
         let node=this.head;
         while(node.next.next){
            node=node.next;
         }
         node.next=null;
      }
      //  returns true if the passed in value is in the list and otherwise returns false.
      contains(value){
         let node=this.head;
         while(node){
            node=node.next;
            if(node.value==value){
               return true;
            } else{
               return false;
            }
         }
      }
      // returns the index of the node containing value, or null if not found.
      find(value){
         let node=this.head;
         let index=0;
         while(node!==null){
            if(node.value==value){
               return index;
            }
            index++;
            node=node.next;
         }
         return null;
      }
      // Represents the LinkedList objects as strings
      toString(){
         let node=this.head;
         let result="";
         while(node!==null){ 
            result+= `(${node.value})->`;
            node=node.next;
            // if(node.next===null){
            //    result+="null";
            // }
            

         }
         // result+=`(${node.value})`;
         return(result);
      }
      // inserts a new node with the provided value at the given index.
      insertAt(value, index){
         let node=this.head;
         let count=0;
         let newNode=new Node(value);
         if(index<0|| index==0){
            newNode.next=this.head;
           this.head=newNode;
           return;
         }
         while(count<index-1 && node){
            node=node.next;
            count++ ;
         }
         // if(index>count){
         //    return this.append(value);
         // }         
         if(node){
            // newNode.next=node.next;
            // node.next=newNode;
            let cur= this.at(index);
            let prev=this.at(index-1);
            prev.next=newNode;
            newNode.next=cur;
            
         } 
      }
      // removes the node at the given index.
      removeAt(index){
         if(this.head==null){
            return false;
         }
         else if(index<0||index>=this.length){
            return false;
         } else if(index==0){
            this.head=this.head.next;
         } else{
            let node=this.head;
            let count=0;
            while(count<index){
            node=node.next;
            count++;          
         }
         if(node){
            let cur=this.at(index);
            let prev=this.at(index-1);
            prev.next=cur.next; 
         }
         }
         

      }

}

const link=new LinkedList();
console.log(link.prepend(5));
console.log(link.append(6));
console.log(link.append(7));
console.log(link.append(8));
console.log(link.append(9));
console.log(link.append(10));
console.log(link.toString());
console.log(link.size());
console.log(link.getHead());
console.log(link.getTail());
console.log(link.at(1));
console.log(link.pop());
console.log(link.toString());
console.log(link.size());
console.log(link.contains(6));
console.log(link.find(8));
console.log(link.insertAt(11,0));
console.log(link.toString());
console.log(link.getHead());
console.log(link.size());
console.log(link.find(11));
console.log(link.removeAt(0));
console.log(link.getHead());
console.log(link.size());
console.log(link.toString());
