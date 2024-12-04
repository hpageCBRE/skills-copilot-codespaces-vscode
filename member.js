function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/members/views/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}