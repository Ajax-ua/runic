export class HomeCtrl {
  constructor($state, signs, $stateParams, UserModelService) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.UserModelService = UserModelService;
    this.$state = $state;
    this.selectedSign = signs[0];
    this.vocabluaries = {
      signs: signs,
    };

    this.onInin();
  }

  onInin() {
    this.UserModelService.currentUser.ref = this.$stateParams.ref;
  }

  selectSign(sign){
    this.selectedSign = sign;
  }

  next(){
    this.$state.go('signup', {step:2, idSign:this.selectedSign.id});
  }
}