
// Create the model, view, and controller
// which starts the application running.
var m = new Model();
var c = new Controller(m);
var v = new View(c, $("#output"));
