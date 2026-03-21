import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Project = {
    title : Text;
    description : Text;
    videoUrl : Text;
    thumbnailUrl : Text;
  };

  module Project {
    public func compare(p1 : Project, p2 : Project) : {
      #equal;
      #less;
      #greater;
    } {
      Text.compare(p1.title, p2.title);
    };
  };

  let contacts = List.empty<ContactSubmission>();
  let projects = Map.empty<Text, Project>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let entry : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contacts.add(entry);
  };

  public query ({ caller }) func getAllContacts() : async [ContactSubmission] {
    contacts.toArray();
  };

  public shared ({ caller }) func addProject(title : Text, description : Text, videoUrl : Text, thumbnailUrl : Text) : async () {
    let project : Project = {
      title;
      description;
      videoUrl;
      thumbnailUrl;
    };
    projects.add(title, project);
  };

  public query ({ caller }) func getProject(title : Text) : async Project {
    switch (projects.get(title)) {
      case (null) { Runtime.trap("Project not found") };
      case (?project) { project };
    };
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray().sort();
  };

  public shared ({ caller }) func updateProject(title : Text, description : Text, videoUrl : Text, thumbnailUrl : Text) : async () {
    if (not projects.containsKey(title)) { Runtime.trap("Project does not exist") };
    let updatedProject : Project = {
      title;
      description;
      videoUrl;
      thumbnailUrl;
    };
    projects.add(title, updatedProject);
  };

  public shared ({ caller }) func deleteProject(title : Text) : async () {
    if (not projects.containsKey(title)) { Runtime.trap("Project does not exist") };
    projects.remove(title);
  };
};
