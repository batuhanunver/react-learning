

export class Logic {

  /**
   * Creates an instance of Logic.
   * @param {Step[]} steps
   * @memberOf Logic
   */
  constructor(steps) {
    this.steps = steps;
    this.stepId = steps[0].id;
    this.questionID = steps[0].first_question;
  }

  /**
   *  Returns step by its id
   * @param {string} stepId
   */
  findStep(stepId) {
    for (const s of this.steps) {
      if (s.id === stepId) {
        return s;
      }
    }
    return null;
  }

  get currentStep() {
    return this.findStep(this.stepId);
  }

  get currentQuestion() {
    return this.currentStep.questions.filter(q => q.id === this.questionID)[0];
  }

}

