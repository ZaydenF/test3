  $(document).ready(function() {
            $(".cards").click(function() {
                var $remainingButtons = $(".cards:visible");
                
                if ($remainingButtons.length > 0) {
                    $remainingButtons.first().hide();
                }
            });
        });
