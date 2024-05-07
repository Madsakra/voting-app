import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";


actor Backend {
 
  // TO UPDATE MOKOTO METHODS USE DFX GENERATE INSTEAD OF JUST DEPLOY
  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText : Text,contentText : Text) 
  {
    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    notes:=List.push(newNote, notes);
    Debug.print(debug_show(notes));

  };

  public query func readNote(): async [Note]
  {
    return List.toArray(notes);
  };


  public func removeNote(id:Nat)
  {
    
    // drop 1st 2 element
     let listFront = List.take(notes, id);

     // drop 2nd ele (b) of [a,b] 
     // not removing exactly but excluding
     let listBack = List.drop(notes,id+1);
     notes:=List.append(listFront,listBack);
  };

};
