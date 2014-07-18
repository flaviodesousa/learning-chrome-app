function TodoCtrl($scope) {
	$scope.todos = [
		{ text: "Todo one", done: true},
		{ text: "Other todo, not done", done: false}
	];

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	}

	$scope.remaining = function() {
		var cnt = 0;
		angular.forEach($scope.todos, function(todo) {
			cnt += todo.done ? 0 : 1;
		});

		return cnt;
	}
}